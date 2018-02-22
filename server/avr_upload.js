/*
**  Author: Sylvain Garant
**  Website: https://github.com/Xobtah
*/

let Avrgirl = require('avrgirl-arduino');
let path = require('path');

module.exports = function (arduinoType, callback) {
    let avrgirl = new Avrgirl({
      board: arduinoType//'nano'
    });

    avrgirl.flash(path.join(__dirname, 'blinking_builtin_led.cpp.hex'), callback);
}
