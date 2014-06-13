var rotor = require("../.."),
expect    = require("expect.js");

describe("node/build#", function () {


  it("can scan a directory with one file that has no dependencies", function (next) {
    rotor.resolve({ entry: __dirname + "/fixtures/test1/index.js" }, function (err, deps) {
      if (err) return next(err);
      expect(deps.length).to.be(1);
      expect(deps[0].entry).to.be(true);
      expect(deps[0].relpath).to.be("index.js");
      next();
    });
  });

  it("can scan a directory with one file that has relative dependencies", function (next) {
    rotor.resolve({ entry: __dirname + "/fixtures/test2/index.js" }, function (err, deps) {
      if (err) return next(err);

      expect(deps.length).to.be(2);
      var dep = deps[0];
      expect(dep.relpath).to.be("math.js");
      expect(dep.source).not.to.be(void 0);
      next();
    });
  });

  it("can include a builtin module", function (next) {
    rotor.resolve({ entry: __dirname + "/fixtures/test3/index.js" }, function (err, deps) {
      if (err) return next(err);

      expect(deps.length).to.be(6);
      next();
    });
  });

  it("can include any file", function (next) {
    rotor.resolve({ entry: __dirname + "/fixtures/test4/index.js" }, function (err, deps) {
      if (err) return next(err);
      expect(deps.length).to.be(2);
      next();
    });
  })
});
