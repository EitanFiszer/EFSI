const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, rest){
    rest.writeHead(200);
    rest.end("My first server");
};

const server = http.createServer(requestListener);
// Esto inicia el servidor
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});