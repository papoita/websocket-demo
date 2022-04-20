// http server code
const http = require("http");
//const { connection } = require("websocket");
//websocket which allows for the handshake
const WebSocketServer = require("websocket").server;
let connection = null;

const httpserver = http.createServer((req, res) => {
  console.log("we have received a request");
})

const websocket = new WebSocketServer({
  "httpServer": httpserver
})

//onaccept send back the switching protocol and get a connection as a result.
websocket.on ("request", request => {
  connection = request.accept(null, request.origin)
  connection.on("open", () => console.log("opened!"))
  connection.on("close", () => console.log("closed!"))
  connection.on("message", message => console.log(`Received message ${message.utf8Data}`))
})

httpserver.listen(8080, () => console.log("My server is listening"))