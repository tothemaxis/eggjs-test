module.exports = (app) => {
  const passport = app.passport;

  // Local authentication strategy
  passport.verify(async (ctx, user) => {
    const { email, password } = user;

    // Find user in database (replace with your User model)
    const userData = await ctx.model.User.findOne({ where: { email } });

    if (!userData) {
      return null;
    }

    // Check password (assuming it's hashed)
    const isMatch = await ctx.helper.comparePassword(
      password,
      userData.password
    );

    if (!isMatch) {
      return null;
    }

    return userData; // Return authenticated user
  });

  passport.serializeUser(async (ctx, user) => {
    return user.id;
  });

  passport.deserializeUser(async (ctx, id) => {
    return await ctx.model.User.findByPk(id);
  });
};
