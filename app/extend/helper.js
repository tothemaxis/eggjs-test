const jwt = require("jsonwebtoken");

module.exports = {
  generateToken(user, app) {
    const secret = app.config.jwt.secret; // Get secret from config
    const expireIn = app.config.jwt.expireIn;
    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
    };

    const token = jwt.sign(payload, secret, {
      expiresIn: expireIn,
      algorithm: "HS256",
    });

    return token;
  },
};
