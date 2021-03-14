import {app, BrowserWindow, ipcMain} from 'electron';
import {URL} from 'url';
import {readTextData} from '/@/modules/textData';
import {PatientGdtModel} from '../models/patient';
import {prepareGdt} from '/@/modules/prepareGdt';
import {createPatientDataFromTxt, readGdtFile} from '/@/modules/manageGdt';
import * as path from 'path';


const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
} else {


  /**
   * Workaround for TypeScript bug
   * @see https://github.com/microsoft/TypeScript/issues/41468#issuecomment-727543400
   */
  const env = import.meta.env;


  // Install "Vue.js devtools BETA"
  if (env.MODE === 'development') {
    app.whenReady()
      .then(() => import('electron-devtools-installer'))
      .then(({default: installExtension}) => {
        /** @see https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg */
        const VUE_DEVTOOLS_BETA = 'ljjemllljcmogpfapbkkighbhhppjdbg';
        return installExtension(VUE_DEVTOOLS_BETA);
      })
      .catch(e => console.error('Failed install extension:', e));
  }

  let mainWindow: BrowserWindow | null = null;

  async function createWindow() {
    mainWindow = new BrowserWindow({
      width: 1000,
      height: 800,
      y: 0,
      x: 0,
      show: false,
      webPreferences: {
        preload: path.join(__dirname, '../preload/index.cjs.js'),
        contextIsolation: env.MODE !== 'test',   // Spectron tests can't work with contextIsolation: true
        enableRemoteModule: env.MODE === 'test', // Spectron tests can't work with enableRemoteModule: false
      },
    });

    /**
     * URL for main window.
     * Vite dev server for development.
     * `file://../renderer/index.html` for production and test
     */
    const pageUrl = env.MODE === 'development'
      ? env.VITE_DEV_SERVER_URL
      : new URL('renderer/index.html', 'file://' + __dirname).toString();

    await mainWindow.loadURL(pageUrl);
    // mainWindow.maximize();
    mainWindow.show();

    if (env.MODE === 'development') {
      mainWindow.webContents.openDevTools();
    }
  }


  app.on('second-instance', () => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });


  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.whenReady()
    .then(createWindow)
    .catch((e) => console.error('Failed create window:', e));

  // Auto-updates
  if (env.PROD) {
    app.whenReady()
      .then(() => import('electron-updater'))
      .then(({autoUpdater}) => autoUpdater.checkForUpdatesAndNotify())
      .catch((e) => console.error('Failed check updates:', e));
  }

  ipcMain.on('request-quit-app', () => {
    app.quit();
  });

  ipcMain.on('request-textdata', () => {
    const textdata = readTextData();
    mainWindow?.webContents.send('recieve-textdata', textdata);
  });

  ipcMain.on('request-patientdata', () => {
    /*
    * todo remove for production
    * */
    prepareGdt();
    /*
    * todo change parameters for production
    *  */
    const text = readGdtFile(path.join(app.getPath('desktop'), 'gdt'), 'pvs.gdt');
    const patientdata:PatientGdtModel = createPatientDataFromTxt(text);
    mainWindow?.webContents.send('recieve-patientdata', patientdata);
  });
}
