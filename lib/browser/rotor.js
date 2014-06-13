var pc = require("paperclip"),
pcparser = require("paperclip/lib/parser")

var bindable = require("bindable");

function Rotor (application) {
  this.application = application;
  bindable.Object.call(this, this);
  application.rotor = this;
  application.views.register("example", require("./views/main"));
  pc.blockBinding("example", require("./template/example"));
}

module.exports = bindable.Object.extend(Rotor, {

  /**
   */

  transform: function (file, content) {
    if (!file) return content;
    var fileType = file.split(".").pop();
    if (fileType === "pc") return pcparser.parse(content);
    return content;
  },

  /**
   */

  editor: function (options) {
    return this.application.views.create("example", options);
  }
});
