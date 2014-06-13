var views = require("mojo-views");

module.exports = views.Base.extend({

  /**
   */

  paper: require("./index.pc"),

  /**
   */

  sections: {
    tabs: require("./fileTabs"),
    document: require("./document")
  },

  /**
   */

  setCurrentDocument: function (doc) {
    this.set("document", doc);
  }
});
