
// Node.js program to demonstrate the  
// fs.readFileSync() method 
  
// Include fs module
const fs = require('fs');
const url = require('url');
const http = require('http');
// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync('./input.txt',
            {encoding:'utf8', flag:'r'});
  
// Display the file data
console.log(data);

// const requestListener = function (req, res) {
//   res.writeHead(200);
//   res.end(data);
// }
function handler(req, res) {
    const parsedUrl =url.parse(req.url, true);
    if(parsedUrl.pathname === '/home'){
        res.writeHead(200, {'Content-type':'text/plain'});
        res.write(data);
        res.end();
    } else {
        res.writeHead(404, {'Content-type':'text/plain'});
        res.end();
    };



}

const server = http.createServer(handler);
server.listen(8080);