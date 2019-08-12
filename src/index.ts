import { app, BrowserWindow } from 'electron';
import * as path from 'path';

const DIST_PATH = path.join(__dirname, 'index.html');

const createWindow = (): BrowserWindow => {
    const win: BrowserWindow = new BrowserWindow({
        width: 1060,
        minWidth: 1060,
        height: 540,
        minHeight: 540,
        backgroundColor: '#2a2a2b',
        webPreferences: {
            devTools: true,
            nodeIntegration: true,
        },
    });
    win.loadURL(`file://${DIST_PATH}`);
    return win;
};

app.on('ready', () => {
    createWindow();
});
