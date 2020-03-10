// import { BrowserWindow } from "electron"

//BACKEND LOGIC
const {
  app,
  BrowserWindow
} = require('electron')

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 250,
    height: 500,
    backgroudColor: '#000',
    icon: `file://${{__dirname}}/dist/assets/log.png`
  })

  win.loadURL(`file://${__dirname}/dist/index.html`)
  // win.webContents.openDevTools()

  win.on('closed', () => win = null)
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit()
})
app.on('active', () => {
  if (win === null)
    createWindow()
})
