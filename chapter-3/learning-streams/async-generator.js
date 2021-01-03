const { Readable } = require('stream');

const readable = Readable.from(generate());

async function* generate() {
    yield 'Node.js';
    yield 'is';
    yield 'a';
    yield 'JavaScript';
    yield 'runtime';
}

readable.on('data', (chunk) => {
    console.log(chunk);
});
