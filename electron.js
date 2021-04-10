const {app, BrowserWindow} = require('electron')

const createMainWindow = () => {
    const window = new BrowserWindow({
        width: 450,
        height: 450,
    })

    window.loadURL("http://localhost:3000")
}

app.on('ready', createMainWindow)