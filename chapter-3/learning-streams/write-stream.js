const fs = require('fs');

const file = fs.createWriteStream('./file.txt');

for (let i = 0; i <= 10; i++) {
    file.write(
        'Node.js is a JavaScript runtime built on V8. \n'
    );
}
