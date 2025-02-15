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

// function createWindow(){
//     const mainWindow = new BrowserWindow({
//         width:800,
//         height:600,
//         webPreferences:{
//             nodeIntegration:true,
//         },
//     });
//     mainWindow.loadFile('index.html')


// }

// app.whenReady().then(() => {
//     createWindow()
  
//     app.on('activate', () => {
//       if (BrowserWindow.getAllWindows().length === 0) {
//         createWindow()
//       }
//     })
//   })
  
//   app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') {
//       app.quit()
//     }
//   })