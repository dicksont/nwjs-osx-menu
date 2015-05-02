# nwjs-osx-menu
Creates a default menu for nw.js on Mac OS X, thereby enabling functionality like Copy-and-Paste.

###Usage

Simply install nwjs-osx-menu with:

```Shell
npm install nwjs-osx-menu
```

Call the module function passing in the window object:

```javascript
require('nwjs-osx-menu')(window);
```
On Mac OS X, this call should add an Edit and a Window menu to the application menubar. On other platforms, this call should not modify the application state.
