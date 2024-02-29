const jsonwebtoken = require("jsonwebtoken");
const genrateToken = (id) => {
  return jsonwebtoken.sign({ id: id }, process.env.JwtSign, {
    expiresIn: "3d",
  });
};
module.exports = { genrateToken };
