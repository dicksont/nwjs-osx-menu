(function() {
  var gui = require('nw.gui');
  if (process.platform === "darwin") {
    var mb = new gui.Menu({type: 'menubar'});
    mb.createMacBuiltin('My App');
    gui.Window.get().menu = mb;
  }
})();
