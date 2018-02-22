/*
**  Author: Sylvain Garant
**  Website: https://github.com/Xobtah
*/

let config = require('./../config');

let fs = require('fs');
let path = require('path');

fs.readdir(path.join(__dirname, '..', config.relativPath || '.', 'Relativ'), (err, files) => {
    if (err)
        require('child_process').exec('git clone https://github.com/relativty/Relativ', (err, stdout, stderr) => {
            if (err)
                return (console.log(err));
            console.log(stdout);
            console.log(stderr);
        });
});

// let config = require('./config');
//
// let fs = require('fs');
//
// fs.readdir(path.join(__dirname, config.relativPath || '.', 'Relativ'), (err, files) => {
//     if (err)
//         require('child_process').exec('git clone https://github.com/relativty/Relativ', (err, stdout, stderr) => {
//             if (err)
//                 return (console.log(err));
//             console.log(stdout);
//             console.log(stderr);
//         });
// });
