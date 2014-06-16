var views = require("mojo-views"),
compile   = require("./compile");

module.exports = views.Base.extend({

  /**
   */

  paper: require("./index.pc"),

  /**
   */

  bindings: {
    "files.@each.source": function () {
      if (!this.get("files")) return;

      try {
        this.set("entry", compile(this.get("files").map(function (file) {
          return file.context();
       }), this.application));
      } catch (e) {
        console.warn(e);
      }
    },
    "entry": function (entry) {
      var el = this.application.nodeFactory.createElement("div");
      try {
        entry(el, this.application);
      } catch (e) {
        el.appendChild(this.application.nodeFactory.createTextNode(e.message));
      }
      this.set("entryElement", el);
    }
  }
});
