const fs = require("fs");
const axios = require("axios");

const raw = fs.readFileSync("./UserProfile.json");
let profiles = JSON.parse(raw);

console.log("Injecting db with mock entires for User and Profile");

(async function () {
  for (i = 0; i < 10; i++) {
    try {
      console.log("profiles[i].username: ", profiles[i].username);
      const res = await axios({
        url: "http://localhost:3001/auth/register",
        method: "post",
        headers: { "Content-Type": "application/json" },
        data: {
          username: profiles[i].username,
          email: profiles[i].email,
          password: profiles[i].password,
        },
      });
      if (!res.status === 201) {
        throw err;
      }
      console.log(
        res.statusText +
          ": User id: " +
          res.data.success.user.id +
          " username: " +
          res.data.success.user.username +
          " email: " +
          res.data.success.user.email
      );
      const resp = await axios({
        url: "http://localhost:3001/profile/mock",
        method: "post",
        headers: { "Content-Type": "application/json" },
        data: {
          userId: res.data.success.user.id,
          firstName: profiles[i].firstName,
          lastName: profiles[i].lastName,
          gender: profiles[i].gender,
          birthDate: profiles[i].birthDate,
          phoneNum: profiles[i].phoneNum,
          address: profiles[i].address,
          description: profiles[i].description,
          isSitter: profiles[i].isSitter,
        },
      });
      if (!res.status === 201) {
        throw err;
      }
      console.log(resp.statusText + ": Profile");
    } catch (err) {
      console.error("Error: ", err.message);
    }
  }
})();
