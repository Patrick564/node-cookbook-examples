const fs = require('fs');
const { Transform } = require('stream');

const rs = fs.createReadStream('file.txt');
const newFile = fs.createWriteStream('new-file.txt');

const upperCase = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
});

rs.pipe(upperCase).pipe(newFile);
