const electron = require('electron')
const url = require('url');
const path = require('path');
const {app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow

var Rcon = require('./node-rcon.js').newHandle;
var rcon = new Rcon();
var rconHasConnected = false

var authIP;
var authPort;
var authPassword;

var customPath = path.join(app.getPath('userData'), 'auth.json')

// Listen for app to be ready
app.on('ready', function() {
  //Create new window
  mainWindow = new BrowserWindow({width: 800, height: 850});
  //Load html file into window
  mainWindow.loadFile('mainWindow.html');

  mainWindow.webContents.openDevTools()
  //Quit app when main window closed
  mainWindow.on('closed', function() {
    if(rconHasConnected == true){
        rcon.end();
    }
    app.quit();
  })
});

ipcMain.on('rcon:connected', function(e, data){
  rcon.connect(data.authIP, data.authPort, data.authPassword, onConnected);

    function onConnected(err, response){
  	   if(err){

         console.error(err);
         mainWindow.webContents.send('connectedText', 'Error connecting.')
         return;
       }

  	    console.log("connected", response);
        mainWindow.webContents.send('connectedText', 'Connected.')
        rconHasConnected = true
  }
});

ipcMain.on('rcon:command', function(e, data){
  var rc = rcon.sendCommand(data, function(err, response){
    console.log("result of command:", err, response);
    if(err){
      mainWindow.webContents.send('commandUsed', 'Could not send command.')
      return;
    }
    if(response.data == ''){
      mainWindow.webContents.send('commandUsed', 'Command Sent.')
    }else {
      mainWindow.webContents.send('commandUsed', response.data)
    }
  });

});
