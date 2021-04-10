# Running React in Electron
## Create a React App
Start by creating your React app in a directory of your choice. For this example, I used `create-react-app` to achieve this. Afterwards, enter the directory through your terminal and run `npm install --save-dev electron`. All commands are shown below. 
```
create-react-app test
cd test
npm install --save-dev electron
```
## Setting Up Electron
I took a bare-minimum and straight forward approach to defining my entry point for electron. Start by creating a new file outside of `src/` called `electron.js`. Next, define your entry point as per usual but instead of loading a file into your window with `window.loadFile()`, load a URL which points to your running React application as such: `window.loadURL("http://localhost:3000")`. The final code in `electron.js` is shown below.
```
const {app, BrowserWindow} = require('electron')

const createMainWindow = () => {
    const window = new BrowserWindow({
        width: 450,
        height: 450,
    })

    window.loadURL("http://localhost:3000")
}

app.on('ready', createMainWindow)
```
## Changing package.json
The last step we need to perform is to alter the contents of `package.json` slightly. Start by setting the `main` key to `electron.js` as such: `"main": "electron.js"`. Next, we need to define a new script for running Electron, since the `start` script is now set to run the React development server. Simply create a field with a key to use for running the script in `scripts` with a value of `electron .`. Your electron start script could for example look like the following: `"electron-start": "electron ."`. A collapsed `package.json` example is given below.
```
{
  ...
  "main": "electron.js",
  "scripts": {
    ...
    "electron-start": "electron ."
  },
  ...
}
```
## Run Your Application
Finally, we can run the application! Start by running the React development server with `npm start`. Next, open up a new terminal window or tab and run eletron with `npm run electron-start`.
![Image of running application]
(./screenshot.png)