// console.log('Hello from child!');

// process.stdout.write('Hello from child 2 \n');

// process.stdin.on('data', () => {
//     console.log('Received a message from a parent');
// })

///////////////////don't work

// throw 1;
// process.on('message', (msg) => {
//     process.send({message: 'received'});
// });

// process.send({ message: 'hello'});

import cluster from 'cluster';
import os from 'os';


if(cluster.isPrimary) {
    const cpus = os.availableParallelism();

    for(let i = 0; i <= cpus; i++) {
        let  worker = cluster.fork();
    }
} else {
    
}