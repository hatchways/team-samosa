const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");
const Profile = require("../Models/Profile");
const asyncHandler = require("express-async-handler");

const s3 = new S3({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS__ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
})

// @route Post /photourl
// @desc Save user photo to AWS S3 bucket and remove the previous one to save storage
// @access Private
exports.uploadPhoto = asyncHandler(async (req, res) => {
    const userId = req.user.id;

    const profile = await Profile.findOne({ userId });
    if (!profile) {
        res.status(404);
        throw new Error("Please create your profile first");
    }
    if (profile.photoUrl) {
        const pathname = profile.photoUrl.substring(48);
        const deleteParams = {
            Bucket: process.env.AWS_BUCKET,
            Key: pathname,
        }
        await s3.deleteObject(deleteParams, (err) => {
            if (err) {
                res.status(400);
                throw new Error('Error occured while trying to delete previous file in S3 bucket', err);
            }
        });
    }
    const uploadParams = {
        Bucket: process.env.AWS_BUCKET,
        Body: fs.createReadStream(req.file.path),
        Key: profile.userId + (`${req.file.originalname}`),
        ACL: 'public-read'
    };
    s3.upload(uploadParams, (err, data) => {
        if (err) {
            res.status(403).send('Error occured while trying to upload to S3 bucket');
        }
        if (data) {
            fs.unlinkSync(req.file.path);
            profile.photoUrl = data.Location;
            profile
                .save()
                .then(profile => {
                    res.json({ message: 'Upload Photo successfully', profile });
                })
                .catch(err => {
                    res.status(400).send('Error occured while trying to save to DB');
                });
        }
    });

});

// @route get /photourl
// @desc Save user photo to local storage
// @access Private
exports.downloadPhoto = asyncHandler(async (req, res) => {
    const userId = req.user.id;

    const profile = await Profile.findOne({ userId });
    if (!profile) {
        res.status(404);
        throw new Error("No profile to check");
    }
    if (profile.photoUrl) {
        const downloadParams = {
            Bucket: process.env.AWS_BUCKET,
            Key: profile.photoUrl.substring(48),
        }
        await s3.getObject(downloadParams,
            function (error, data) {
                if (error) {
                    res.json("Failed to retrieve an object: ");
                } else {
                    res.setHeader("content-type", "some/type");
                    fs.createReadStream(`./${profile.photoUrl.substring(72)}`).pipe(res);
                }
            }
        );
    }

});
