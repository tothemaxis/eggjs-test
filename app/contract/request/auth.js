"use strict";

module.exports = {
  loginRequest: {
    email: { type: "string", required: true, description: "email" },
    password: { type: "string", required: true, description: "password" },
  },
};
