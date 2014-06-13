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
    if (this.document) {
      this.document.set("selected", false);
    }
    this.set("document", doc);
    doc.set("selected", true);
  }
});
