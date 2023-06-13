// import { Worker, parentPort } from 'worker_threads';

// let worker = new Worker(filePath, options);
// events: message, error, exit, online;
// postMessage();

// 
// let { port1, port2 } = new MessageChannel();




import { Worker } from 'worker_threads';

let worker = new Worker('./worker.js');

worker.on('online', () => {
    worker.postMessage({data: 10})
})

worker.on('message', (msg) => {
    // process message
    worker.terminate();
})