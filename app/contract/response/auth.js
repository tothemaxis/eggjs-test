"use strict";

module.exports = {
  authResponse: {
    token: { type: "string", description: "Authentication Token" },
    user: {
      type: "object",
      properties: {
        id: { type: "string", description: "User ID" },
        name: { type: "string", description: "User Name" },
        email: { type: "string", description: "User Email" },
      },
    },
  },
};
