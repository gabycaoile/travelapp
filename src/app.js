const express = require('express');

// Create an express app
const app = express();

// Set up API controller
app.use('/', require('./controllers/apiController'));

// Create http server
const server = require('http').createServer(app);

const PORT = 3000;

// Set server properties
server.listen(PORT, (err) => {
    if(err) {
        return console.log(`Unable to listen to port ${PORT}`, err);
    }

    console.log(`Listening on port ${PORT}`);

});