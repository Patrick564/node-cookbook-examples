const fs = require('fs');
const moment = require('moment');

const file = './file.txt';

fs.watch(file, (eventType, filename) => {
    const time = moment().format('MMMM Do YYYY, h:mm:ss a');

    return console.log(`${filename} updated ${time}`);
});
