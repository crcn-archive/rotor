
var Rotor   = require("./rotor"),
Application = require("mojo-application"),
views       = require("mojo-views");

module.exports = function (app) {

  if (!app) {
    app = new Application();
    app.use(views);
    app.use(require("mojo-paperclip"));
  }

  return new Rotor(app);
}
