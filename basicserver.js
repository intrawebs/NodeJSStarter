var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(80, "ubuntu@ec2-50-18-142-132.us-west-1.compute.amazonaws.com");
console.log('Server running at http://ec2-50-18-142-132.us-west-1.compute.amazonaws.com');