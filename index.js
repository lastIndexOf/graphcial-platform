const { app, BrowserWindow } = require('electron')  

const { mainWindowConfig, animateWindowConfig } = require('./config')

let mainWindow = null
let animateWindow = null

app.on('window-all-closed', function() {

  if (process.platform != 'darwin') {

    app.quit()

  }

})

app.on('ready', function() {
  
  let flag = false

  animateWindow = new BrowserWindow(animateWindowConfig)
  mainWindow = new BrowserWindow(mainWindowConfig)

  mainWindow.setMenu(null)
  animateWindow.loadURL(`file://${__dirname}/app/src/startAnimate/index.html`)
  mainWindow.loadURL('http://localhost:4000')
  
  let checkWindow = () => {

    if (flag) {
    
      animateWindow.close()
      animateWindow = null

      setTimeout(() => {
        
        mainWindow.show()
      
      }, 500)


      if (process.NODE_ENV !== 'production') mainWindow.openDevTools()

    } else {

      setTimeout(checkWindow, 1000)

    }

  }
  setTimeout(checkWindow, 1500)
  
  animateWindow.once('ready-to-show', () => {

    animateWindow.show()

  })

  mainWindow.once('ready-to-show', () => {

    flag = true

  })

  mainWindow.on('closed', function() {

    mainWindow = null

  })

})
