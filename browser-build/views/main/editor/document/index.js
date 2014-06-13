var views = require("mojo-views"), ace;

if (process.browser) {
  ace = require("brace");
} else {
  ace = {
    edit: function (element) {

    }
  }
}

module.exports = views.Base.extend({

  /**
   */

  bindings: {

  },

  /**
   */

  didCreateSection: function () {
    var div = this.application.nodeFactory.createElement("div");
    this.editor = ace.edit(div);
    this.section.append(div);
  }
});
