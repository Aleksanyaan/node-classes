import fs from 'fs';

// const readableStream = fs.createReadStream('file.txt');

// readableStream.on('data', chunk => {
//     console.log(chunk);
// });

// readableStream.on('open', () => {
//     console.log('open');
// });

// readableStream.on('error', (e) => {
//     console.log(e.message);
// });

// readableStream.on('end', () => {
//     console.log('end');
// });


// readableStream.on('close', () => {
//     console.log('close');
// });

const writableStream = fs.createWriteStream('newfile.txt');
const readableStream = fs.createReadStream('file.txt');

// writableStream.write('hello ');
// writableStream.write('world');
// writableStream.write('!!!');

// writableStream.end();

// readableStream.on('data', chunk => {
//     writableStream.write(chunk);
// });


// readableStream.on('end', () => {
//     writableStream.end();
// });

readableStream.pipe(writableStream);

// readableStream.on('data', chunk => {
//     const check = writableStream.write(chunk);

//     if(check === false) {
//         readableStream.pause();
//     }

//     writableStream.once('drain', () => {
//         readableStream.resume();
//     });
// });

readableStream.on('open', () => {
    console.log('open readable');
});

writableStream.on('open', () => {
    console.log('open writable');
});



readableStream.on('end', () => {
    console.log('end readable');
    writableStream.end();
});

readableStream.on('error', () => {
    console.log('error readable');
});

writableStream.on('error', () => {
    console.log('error writable');
});
readableStream.on('close', () => {
    console.log('close readable');
});

writableStream.on('close', () => {
    console.log('close writable');
});


process.on('SIGINT', () => {
    readableStream.destroy();
    writableStream.destroy();
});