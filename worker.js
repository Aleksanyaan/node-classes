import { parentPort} from ' worker_threads';

function doSomeTask(num) {
    return num * num;
}

parentPort.on('message', msg => {
 let data = { msg };
 let result = doSomeTask(data);

 parentPort.postMessage(result);
})