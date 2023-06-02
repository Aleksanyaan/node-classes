import process from 'process';
import * as fs from 'node:fs';

function readFile(path) {
    fs.readFile(`./${path}`, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
    });
}
readFile('files.txt');

function writeFile(name, content) {
    fs.writeFile(name, content, (err) => {
        if (err) throw err;
        console.log('File is created successfully.');
    });
}


writeFile('newfile.txt', 'Hiii everyone');
readFile('newfile.txt');


