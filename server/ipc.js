/*
**  Author: Sylvain Garant
**  Website: https://github.com/Xobtah
*/

let { ipcMain } = require('electron');
let avr_upload = require('./avr_upload');

ipcMain.on('upload', (event, arduinoType) => {
    console.log(arduinoType)
    avr_upload(arduinoType, (err) => {
        if (err)
            event.sender.send('upload_error', err);
        else
            event.sender.send('upload_success');
    });
});
