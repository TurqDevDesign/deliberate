const electron     = require('electron')
const { app, ipcMain, BrowserWindow, session, dialog, Tray, Menu }
                   = electron
const path         = require('path')
const url          = require('url')
const trayIconPath = path.join(__dirname, 'icons', 'res', 'settings.png') // Set to path of app icon
const fs           = require('fs')

let width, height, mainWindow

function createWindow() {

    //set width and height of screen
    let {
        width,
        height
    } = electron.screen.getPrimaryDisplay().workAreaSize

    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: width / 2,
        height: height / 2,
        //icon: trayIconPath
    })

    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/deliberate_structure.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    /**

    let appIcon = new Tray(trayIconPath)
    let contextMenu = Menu.buildFromTemplate([{
            label: 'Show App',
            click: function() {
                mainWindow.show()
            }
        },
        {
            label: 'Quit',
            click: function() {
                app.isQuiting = true
                app.quit()

            }
        }
    ])

    **/

    // appIcon.setContextMenu(contextMenu)

    mainWindow.on('close', function(event) {
        mainWindow = null
    })

    mainWindow.on('minimize', function(event) {
        event.preventDefault()
        mainWindow.hide()
    })

    mainWindow.on('show', function() {
        // appIcon.setHighlightMode('always')
    })

}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function() {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
})
