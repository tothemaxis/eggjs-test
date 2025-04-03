"use strict";

const jwt = require("jsonwebtoken");

module.exports = (options, app) => {
  return async function jwtAuth(ctx, next) {
    const token = ctx.request.header.authorization;
    if (!token || !token.startsWith("Bearer ")) {
      ctx.throw(401, "Token is missing or invalid");
    }
    try {
      const decoded = jwt.verify(
        token.split(" ")[1],
        ctx.app.config.jwt.secret
      );
      ctx.state.user = decoded; // Store user data in context
      await next();
    } catch (err) {
      ctx.throw(401, "Invalid token");
    }
  };
};
