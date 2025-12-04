"use strict";

// src/preload.js
var { contextBridge } = require("electron");
contextBridge.exposeInMainWorld("electronAPI", {
  platform: process.platform,
  versions: {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron
  }
});
//# sourceMappingURL=preload.js.map
