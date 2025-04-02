const { Service } = require("egg");
const bcrypt = require("bcryptjs");

class UserService extends Service {
  async findByCredentials(email, password) {
    // Assume you're using a model called `User` for user data
    const result = await this.app.mysql.get("users", { email: email });
    if (!result) {
      return null; // If no user is found, return null or throw an error
    }

    const isPasswordValid = await bcrypt.compare(password, result.password);

    if (!isPasswordValid) {
      return null; // If the password doesn't match, return null or throw an error
    }

    return result;
  }

  async getUsers() {
    const results = await this.app.mysql.select("users"); // Query all users
    return results;
  }
}

module.exports = UserService;
