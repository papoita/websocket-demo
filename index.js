const http = require("http");
const { connection } = require("websocket");
const WebSocketServer = require("websocket").server;
let connection = null;

const httpserver = http.createServer((req, res) => {
  console.log("we have received a request");
})

const websocket = new WebSocketServer({
  "httpServer": httpserver
})

websocket.on ("request", request => {
  connection = request.accept(null, request.origin)
  connection.on("onopen", e => console.log("opened!"))
})

httpserver.listen(8080, () => console.log("My server is listening"))