# nwjs-osx-menu
Creates a default menu for your nw.js program on Mac OS X, thereby enabling functionality like Copy-and-Paste.

## Background
Lack of **⌘C**(copy) and **⌘V**(paste) was making development difficult on nw.js. Originally, I had saved the code as a gist/snippet. But even this required copy and paste. I was getting tired of typing in this boilerplate every time, I ran my app. So I tried to find a better solution.

I checked to see if anyone has created module to address this problem. It appeared that no one had. I also checked, to see if code for this would make more sense in nw.js itself. It did not. It also probably will not.

So I went ahead and put together this solution on a Saturday. Enjoy!

##Usage

Simply install nwjs-osx-menu with:

```Shell
npm install nwjs-osx-menu
```

Call the module function passing in the window object:

```javascript
require('nwjs-osx-menu')(window);
```

On Mac OS X, this call should add an Edit and a Window menu to the application menubar. On other platforms, this call should not modify the application state.
