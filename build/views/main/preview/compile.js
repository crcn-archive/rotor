var loader = function (deps) {

  var darr = [], global = window;

  for (var key in deps) {
    darr.push(deps[key]);
  }

  function initModule (dep) {
    if (dep.module) return dep.module;
    dep.module = { exports: {} };

    dep[0](function (path) {
      var rdep = deps[dep[2][path]];
      var module = rdep.module || initModule(rdep);
      return module.exports;
    }, dep.module, dep.module.exports);

    return dep.module;
  }

  darr.forEach(initModule);

  return darr.filter(function (dep) {
    return dep[1];
  }).map(function (dep) {
    return dep.module || {};
  }).pop();
}



module.exports = function (files, application) {

  var buffer = [loader.toString()];


   var dbuffer = [];


  for (var i = files.length; i--;) {
    var file = files[i];


    var req = "function (require, module, exports) { " + application.rotor.transform(file.relpath, file.source) + "}"


    dbuffer.push("" + file.id + ": ["+req+", "+!!file.entry+", "+JSON.stringify(file.deps)+"]")
  }


  var header = 
  "var global = window; " + 
  "var process = {" +
    "nextTick: function (next) {" +
      "setTimeout(next, 0); " +
    "}," + 
    "browser: true" +
  "}";

  console.log(header);

  buffer = [header, ";return (" + loader.toString() + ").call(null, {"+dbuffer.join(",")+"})"]



  var fn = new Function(buffer.join(""));

  return fn().exports;
}
