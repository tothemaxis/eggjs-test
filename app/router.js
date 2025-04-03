/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  const auth = app.middleware.auth(); // Use auth middleware

  router.prefix("/api/v1");

  router.get("/users", auth, controller.user.index);
  // router.get("/authCallback", controller.auth.authCallback); // Render login page, user inputs account password

  // router.get("/login", controller.auth.login); // Login verification
  router.post("/login", controller.auth.login);
  router.get("/logout", controller.auth.logout);

  // router.resources("users", "/users", controller.user);

  // Log routes for debugging
  // router.stack.forEach((layer) => {
  //   console.log(layer.path);
  // });
};
