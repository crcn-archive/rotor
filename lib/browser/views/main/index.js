var views = require("mojo-views");

module.exports = views.Base.extend({

  /**
   */

  paper: require("./index.pc"),

  /**
   */

  sections: {
    editor: require("./editor"),
    preview: require("./preview")
  }
});
