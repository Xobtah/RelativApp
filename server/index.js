/*
**  Author: Sylvain Garant
**  Website: https://github.com/Xobtah
*/

let config = require('./../config');

let path = require('path');
/*let git = require('nodegit');

git.Clone(config.relativURL || 'https://github.com/relativty/Relativ', path.join(__dirname, config.relativPath || '.'));*/
require('child_process').exec('git clone https://github.com/relativty/Relativ', (err, stdout, stderr) => {
    if (err)
        return (console.log(err));
    console.log(stdout);
    console.log(stderr);
});
