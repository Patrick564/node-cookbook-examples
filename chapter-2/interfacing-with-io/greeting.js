process.stdin.on('data', (data) =>{
    // Buffer object data returns a binary representation
    const name = data.toString().trim().toUpperCase();

    if (name !== '') {
        process.stdout.write(`Hello ${name}`);
    } else {
        process.stderr.write('Input was empty');
    }
});
