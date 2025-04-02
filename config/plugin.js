/** @type Egg.EggPlugin */
module.exports = {
  mysql: {
    enable: true,
    package: "egg-mysql",
  },
  swaggerdoc: {
    enable: true,
    package: "egg-swagger-doc",
  },
  validate: {
    enable: true,
    package: "egg-validate",
  },
  passport: {
    enable: true,
    package: "egg-passport",
  },
  passportLocal: {
    enable: true,
    package: "egg-passport-local",
  },
};
