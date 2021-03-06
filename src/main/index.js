import { app, BrowserWindow } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

const electron = require('electron')
const windowManager = require('electron-window-manager')

function createWindow() {
  /**
   * Initial window options
   */
  const { width, height } = electron.screen.getPrimaryDisplay()
    .workAreaSize
  const yposition = height - 60;
  //mainWindow = new BrowserWindow({
    windowManager.init( '...' );
    windowManager.setDefaultSetup({
    width,
    height: 60,
    x: 0,
    y: yposition,
    alwaysOnTop: true,
    frame: false,
    transparent: true,
    resizable: false,
    scrollBounce: false,
    webPreferences: {
      nodeIntegration: true
    }
  })
  //mainWindow.loadURL(winURL)
  windowManager.open('mainmenu', 'Clarity', winURL)

  
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

//Janelas do sistema:


/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'
autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})
app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
