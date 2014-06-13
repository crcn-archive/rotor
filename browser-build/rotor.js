require("paperclip");

var bindable = require("bindable");

function Rotor (application) {
  this.application = application;
  bindable.Object.call(this, this);
  application.rotor = this;
  application.views.register("rotor", require("./views/main"));
}

module.exports = bindable.Object.extend(Rotor, {

  /**
   */

  transform: function (fileType, transformer) {

  },

  /**
   */

  editor: function (options) {
    return this.application.views.create("rotor", options);
  }
});
