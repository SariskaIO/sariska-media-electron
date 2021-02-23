"use strict";

var _require = require('electron'),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow;

var isDev = require('electron-is-dev');

var path = require('path');

var mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false
  });
  var startURL = isDev ? 'http://localhost:3000' : "file://".concat(path.join(__dirname, '../build/index.html'));
  mainWindow.loadURL(startURL);
  mainWindow.once('ready-to-show', function () {
    return mainWindow.show();
  });
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);