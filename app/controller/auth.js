const Controller = require("egg").Controller;
const CustomError = require("../errors/customError");
/**
 * @controller AuthController Authentication APIs
 */
class AuthController extends Controller {
  /**
   * @summary Login
   * @description User authentication using email and password
   * @router POST /login
   * @request body loginRequest body
   * @response 200 authResponse Login success
   */
  async login() {
    const { ctx } = this;
    try {
      // Ensure you're calling the service method correctly
      const user = await ctx.service.user.findByCredentials(
        ctx.request.body.email,
        ctx.request.body.password
      );

      if (!user) {
        throw new CustomError("Invalid credentials", 401); // Use custom error
      }

      ctx.body = {
        message: "Login successful",
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
        token: ctx.helper.generateToken(user, ctx.app),
      };
    } catch (error) {
      if (error instanceof CustomError) {
        ctx.status = error.statusCode;
        ctx.body = { message: error.message };
      } else {
        ctx.status = 500;
        ctx.body = { message: "An unexpected error occurred" };
      }
    }
  }

  /**
   * @summary Logout
   * @router GET /logout
   */
  async logout() {
    const { ctx } = this;
    ctx.logout();
    ctx.body = { message: "Logged out" };
  }
}

module.exports = AuthController;
