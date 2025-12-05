"use strict";

// src/main.ts
var { app, BrowserWindow } = require("electron");
var path = require("path");
var isDev = process.env.NODE_ENV !== "production";
function createWindow() {
  const win = new BrowserWindow({
    width: 1600,
    height: 900,
    transparent: true,
    frame: false,
    titleBarStyle: "hiddenInset",
    trafficLightPosition: { x: 15, y: 10 },
    vibrancy: "under-window",
    visualEffectState: "active",
    backgroundColor: "#00000000",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
      webgl: true
    }
  });
  if (isDev) {
    win.loadFile(path.join(__dirname, "../src/index.html"));
    win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, "index.html"));
  }
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
//# sourceMappingURL=main.js.map
