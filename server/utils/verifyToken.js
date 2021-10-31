const jwt = require("jsonwebtoken");

const verifyToken = (token) =>
  jwt.verify(token.slice(6), process.env.JWT_SECRET);

module.exports = verifyToken;
