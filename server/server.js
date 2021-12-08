const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const postsRoutes = require('./routes/routes')

server.use('/', postsRoutes)

// server.get('/', (req, res) => res.send('Hello, friend.'))

module.exports = server