const jwt = require("jsonwebtoken");

module.exports = {
  generateToken(user) {
    // Replace 'your-secret-key' with your actual secret key
    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
    };

    // Here we use a JWT secret key (make sure it's stored securely in env vars or config)
    const token = jwt.sign(payload, "your-secret-key", { expiresIn: "1h" });

    return token;
  },
};
