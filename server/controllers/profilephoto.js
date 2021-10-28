const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");
const Profile = require("../Models/Profile");
const asyncHandler = require("express-async-handler");
//require("dotenv").config();

// @route GET /profileUrl
// @desc the Url of the profilephoto of this user
// @access Private
exports.getPhoto = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const profile = await Profile.findOne({ userId });
    res.send({
        photoUrl: profile.photoUrl === "" ? "https://picsum.photos/id/237/200/300" : profile.photoUrl,
    });
});

// @route Post /photourl
// @desc Save user photo to AWS S3 bucket
// @access Private
exports.uploadPhoto = asyncHandler(async (req, res) => {
    const userId = req.user.id;

    const profile = await Profile.findOne({ userId });
    if (!profile) {
        res.status(404);
        throw new Error("Please create your profile first");
    }
    const s3 = new S3({
        region: process.env.AWS_REGION,
        accessKeyId: process.env.AWS__ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
    })
    if (!profile.photoUrl) {
        let { pathname } = new URL(profile.photoUrl, 'http://example.org') // dummy domain to avoid invalid URL error
        pathname = pathname.substring(1) // remove first character '/'
        const deleteParams = {
            Bucket,
            Key: pathname,
        }
        await s3.deleteObject(deleteParams, (err, data) => {
            if (err) {
                console.log('Error occured while trying to delete previous file in S3 bucket', err);
            } else {
                console.log('Delete previous file successfully', err);
            }
        });
    }
    const uploadParams = {
        Bucket: process.env.AWS_BUCKET,
        Body: fs.createReadStream(req.file.path),
        Key: `${req.file.originalname}`
    };
    s3.upload(uploadParams, (err, data) => {
        if (err) {
            console.log('Error occured while trying to upload to S3 bucket', err);
        }
        if (data) {
            fs.unlinkSync(req.file.path); // Empty temp folder
            const locationUrl = data.Location;
            profile.photoUrl = locationUrl;
            newUser
                .save()
                .then(profile => {
                    res.json({ message: 'Upload Photo successfully', profile });
                })
                .catch(err => {
                    console.log('Error occured while trying to save to DB', err);
                });
        }
    });

});

