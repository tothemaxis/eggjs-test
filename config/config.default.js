/* eslint valid-jsdoc: "off" */
const path = require("path");

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1743488871127_2432";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mysql = {
    // database configuration
    client: {
      host: "127.0.0.1",
      port: "3306",
      user: "root",
      password: "fb0b9v]",
      database: "sspg-stock",
    },
    // load into app, default true
    app: true,
    // load into agent, default false
    agent: false,
  };

  /**
   * egg-swagger-doc default config
   * @member Config#swagger-doc
   * @property {String} dirScanner - 插件扫描的文档路径
   * @property {String} basePath - api前置路由
   * @property {Object} apiInfo - 可参考Swagger文档中的Info
   * @property {Array[String]} apiInfo - 可参考Swagger文档中的Info
   * @property {Array[String]} schemes - 访问地址协议http或者https
   * @property {Array[String]} consumes - contentType的集合
   * @property {Array[String]} produces - contentType的集合
   * @property {Object} securityDefinitions - 安全验证，具体参考swagger官方文档
   * @property {Boolean} enableSecurity - 是否使用安全验证
   * @property {Boolean} routeMap - 是否自动生成route
   * @property {Boolean} enable - swagger-ui是否可以访问
   */
  config.swaggerdoc = {
    enable: true,
    dirScanner: "./app/controller",
    schema: path.join(appInfo.baseDir, "app/contract"),
    apiInfo: {
      title: "EGGJS",
      description: "swagger-ui for EGGJS",
      version: "1.0.0",
    },
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    enableSecurity: false,
    routerMap: true,
  };

  // https://github.com/jaredhanson/passport-local
  // config.passportLocal = {};
  config.passportLocal = {
    usernameField: "email", // or 'username' depending on your form
    passwordField: "password",
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.jwt = {
    secret: "tqw)N)RQ~5idWIIsay}X9XQUKGb&v1",
  };

  return {
    ...config,
    ...userConfig,
  };
};
