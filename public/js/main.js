/*
**  Author: Sylvain Garant
**  Website: https://github.com/Xobtah
*/

let ipc = require('electron').ipcRenderer;

function buttonPush() {
    /*let e = document.getElementById('arduinoType');
    let arduinoType = e.options[e.selectedIndex].value;
    console.log(arduinoType);*/
    let radios = document.getElementsByName('arduinoType');

    for (var i = 0, length = radios.length; i < length; i++)
        if (radios[i].checked) {
            ipc.send('upload', radios[i].id);
            break;
        }
}

ipc.on('upload_success', () => {
    Materialize.toast('Uploaded! :)', 4000)
});

ipc.on('upload_error', (event, err) => {
    Materialize.toast('Failure! :(', 4000);
});
