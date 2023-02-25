//so it doesn't conflict with the client port
//checks if the port is already in use
const app = require('./app');
const http = require('http');
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);





server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
