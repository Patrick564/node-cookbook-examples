const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(process.cwd(), 'hello.txt');

async function run() {
    try {
        const contents = await fs.readFile(filePath, 'utf-8');
        console.log('File contents', contents);

        await fs.writeFile(filePath, contents.toUpperCase());
        console.log('Done');
    } catch (error) {
        console.error(error);
    }
}

run();
