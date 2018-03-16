const {
  app,
  BrowserWindow
} = require('electron')  

let mainWindow = null

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit()
  }
})

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 1980,
    height: 1080,
    frame: false //无边框
  })

  // mainWindow.setMenu(null)

  mainWindow.loadURL('http://localhost:4000')

  mainWindow.openDevTools()

  mainWindow.on('closed', function() {
    mainWindow = null
  })
})
