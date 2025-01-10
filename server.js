// Import the HTTP module
const http = require('http');

// Create a server that responds with "Hello World"
const server = http.createServer((req, res) => {
    res.statusCode = 200; // HTTP status OK
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, eman!\n');
});

// Define the port
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:3000/`);
});
