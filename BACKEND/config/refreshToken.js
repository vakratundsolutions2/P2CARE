const jsonwebtoken = require("jsonwebtoken");
const genrateRefreshToken = (id) => {
  return jsonwebtoken.sign({ id: id }, process.env.JwtSign, {
    expiresIn: "1d",
  });
};
module.exports = { genrateRefreshToken };
