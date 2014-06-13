var views = require("mojo-views");

var TabView = views.Base.extend({
  paper: require("./tab.pc")
});

module.exports = views.Base.extend({

  /**
   */

  paper: require("./index.pc"),

  /**
   */

  sections: {
    items: {
      type: "list",
      source: "files",
      modelViewClass: TabView,
      filter: function (model) {
        return !!model.get("relpath");
      }
    }
  }
});
