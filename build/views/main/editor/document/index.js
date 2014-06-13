var views = require("mojo-views"),
_ = require("lodash"),
ace;


if (process.browser) {
  ace = require("brace");
} else {
  ace = {
    edit: function (element) {

    }
  }
}

require("brace/mode/javascript");
require("brace/mode/html");

function getMode (document) {
  var relpath = document.get("relpath"),
  fileType = relpath.split(".").pop();

  console.log(fileType);
  return {
    pc: "html",
    js: "javascript"
  }[fileType] || "javascript";
}


module.exports = views.Base.extend({

  /**
   */

  bindings: {
    "files": function (files) {
      var firstFile = files.filter(function (file) {
        return file.get("relpath") && !file.get("entry")
      }).pop();
      this.get("setCurrentDocument").call(this, firstFile);
    },
    "document": function (document) {
      var src = document.get("source");
      this.editor.getSession().setMode("ace/mode/" + getMode(document));
      this.editor.setValue(src);
    }
  },

  /**
   */

  didCreateSection: function () {
    var div = this.application.nodeFactory.createElement("div");
    div.setAttribute("class", "rotor-edit-document");
    this.editor = ace.edit(div);
    this.editor.on("input", _.bind(this._onSrcChange, this));
    this.section.append(div);
  },

  /**
   */

  _onSrcChange: function () {
    this.set("document.source", this.editor.getValue());
  }
});
