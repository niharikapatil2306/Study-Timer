const path = require('path');
require('electron-reload')(path.join(__dirname), {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

const {app, BrowserWindow} = require("electron")

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width:600,
        height:500,
        resizable:false,
        title:"StudyTimer",
        webPreferences:{
            nodeIntegration:true
        }
    });

    mainWindow.loadFile("index.html");

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin'){
            app.quit()
        }
    });
});
