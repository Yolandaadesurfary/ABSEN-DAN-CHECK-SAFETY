const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile('login.html'); // Load file utama Anda
}

// Jalankan aplikasi ketika Electron sudah siap
app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Keluar jika semua jendela ditutup
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
