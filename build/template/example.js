var pc = require("paperclip");

module.exports = pc.BaseBlockBinding.extend({
  bind: function (context) {
    this._view = context.application.views.create("example");
    this.section.append(this._view.render());
    return pc.BaseBlockBinding.prototype.bind.apply(this, arguments);
  },
  unbind: function () {
    return pc.BaseBlockBinding.prototype.unbind.apply(this, arguments);
  },
  _onChange: function (options) {

    if (options.__isBindableCollection) {
      options = { files: options };
    }

    this._view.setProperties(options);
  }
})
