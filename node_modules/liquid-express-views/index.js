var { Liquid } = require("liquidjs");
const path = require("path");

const liquidView = (app, options = {}) => {
  const {
    viewDir = "./views",
    middleware = (app) => {},
    engineConfig = (engine) => {},
    root = ["./views", "./", process.cwd() + "/views/"],
    ext = ".liquid"
  } = options;

  var engine = new Liquid({root, ext});
  engineConfig(engine);

  app.engine("liquid", engine.express());
  app.set("views", viewDir); // specify the views directory
  app.set("view engine", "liquid");
  middleware(app);

  return app;
};

module.exports = liquidView;
