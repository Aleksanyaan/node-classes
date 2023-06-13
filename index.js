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











import cluster from 'cluster';

if(cluster.isPrimary) {
    //1. Get all the .csv file paths from a directory. reject if there is not correct path
    //2. Determine the worker count based on available CPUs and csv files
    //3. Distribute /csv file paths evenly among workers
    //4. Fork workers and pass the .csv file path
    //5. Collect process records count from workers
    //6. Log the overall processed rcords count, and terminate (resolve)
    
    
    //1) cluster.fork([])
    //2) let worker = cluster.fork();
    
} else {
    ///////////////7.///////////////// 
    //1. Listen message and get the .csv file paths to process
    //2. Read the content, parse (count process records)
    //3. Save the parsed results as a json files
    //4. Send the results (records count) to parent
    //5. Terminate

    //1) process.env
    //2) worker. on('online', () => {
    //     worker.send({});
    // })
}