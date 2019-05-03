// var http = require("http");

// var onRequest = function(request, response) {
//   console.log("Request received");
//   response.writeHead(200, { "Content-Type": "application/json" });
//   // response.write('Hello from out application');
//   var myObj = {
//     name: "kelly",
//     job: "programmer"
//   };
//   response.end(JSON.stringify(myObj));
// };

// var server = http.createServer(onRequest);

var http = require("http");
var fs = require("fs");

var onRequest = function(request, response) {
  console.log("Request received");
  response.writeHead(200, { "Content-Type": "text/html" });
  var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
  // response.write('Hello from out application');
  myReadStream.pipe(response);
};

var server = http.createServer(onRequest);

server.listen(3000);
console.log("Server started on localhost port 3000");