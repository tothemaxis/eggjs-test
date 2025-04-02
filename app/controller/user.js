const { Controller } = require("egg");

/**
 * @controller Users
 */
class UserController extends Controller {
  /**
   * @summary get list of all users
   * @router GET /users
   * @response 200
   */
  async index() {
    const { ctx } = this;
    const users = await ctx.service.user.getUsers();
    if (!users) {
      ctx.status = 404;
      ctx.body = { success: false, message: "Users not found" };
      return;
    }
    ctx.body = { success: true, data: users };
  }

  async create() {
    const { ctx } = this;
    const user = await ctx.service.user.createUser(ctx.request.body);
    ctx.body = { success: true, data: user };
  }
}

module.exports = UserController;
