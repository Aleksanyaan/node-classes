// import { spawn } from 'child_process';
// import { resolve } from 'path';



// childProcess.stdout.on('data', data => {
//     console.log('child:stdout', data.toString());
// });

// childProcess.stderr.on('error', data => {
//     console.log('child:stderr', data.toString());
// });

// childProcess.stdin.write('Hello from parent');

// childProcess.on('message', (msg) => {
//     console.log('Child:message', msg);
// });

// childProcess.send({ message: 'received'});

// function spawnAProcess() {
//     return new Promise((resolve, reject) => {

//         const childProcess = spawn('node', ['./child.js'], {
//             stdio: ['pipe', 'ipc', 'pipe'],
//             serialization: 'advanced',
//         });

//         childProcess.on('message', (msg) => {
//             // console.log('Child:message', msg);
//             resolve(msg);
//         });

//         childProcess.on('error', reject);

//         childProcess.stderr.on('data', (err) => {
//             // console.log('Child:error', err);
//             reject(err.toString());
//         })

//         childProcess.send({ message: 'Hello from parent'});
//     })
// }

// (async () => {
//     try {
        
//     } catch (error) {
//         console.log(error)
//     }
// })();




// childProcess.on('spawn', () => {
//     console.log('Child:spawned');
// });

// childProcess.on('error', () => {
//     console.log('Child:error');
// })

// childProcess.on('exit', () => {
//     console.log('Child:exited');
// });

// childProcess.on('close', () => {
//     console.log('Child:closed');
// });
