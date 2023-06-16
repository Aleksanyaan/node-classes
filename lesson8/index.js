import http from 'http';

const server = http.createServer(requestListener);
// http.Server --> net.Server --/. EventEmitter

function requestListener(request, response) {
    //request: http.IncomingMessage --> Stream
    //response: http.ServerResponse --> Stream
    const method = request.method;
    console.log('Request method', method);

    response.write('Hello there');
    response.status = 400;
    response.writeHead(400, {})
    response.end();
}

server.listen(3000, () => {
    console.log('Server is up and running');
})