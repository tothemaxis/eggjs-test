/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  // router.prefix("/api/v1");
  router.get("/", controller.home.index);
  router.get("/users", controller.user.index);
  // router.get("/authCallback", controller.auth.authCallback); // Render login page, user inputs account password

  // router.get("/login", controller.auth.login); // Login verification
  router.post("login", controller.auth.login);
  router.get("logout", controller.auth.logout);
  // router.post(
  //   "/login",
  //   app.passport.authenticate("local", { successRedirect: "/authCallback" })
  // );

  // router.resources("users", "/users", controller.user);

  // Log routes for debugging
  // router.stack.forEach((layer) => {
  //   console.log(layer.path);
  // });
};
