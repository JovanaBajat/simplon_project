const express = require('express');
const router = require('./router/router');

const server = express()

server.use(express.json());
server.use(router);

server.listen( 8888, () => {
    console.log('Server listening on port 8888...')
})
