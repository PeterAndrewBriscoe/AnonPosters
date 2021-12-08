const express = require('express');
const cors = require('cors');

const server = express();
const router = express.Router();
server.use(cors());
server.use(express.json());
const postController = require('./controllers/posts')


server.get('/', (req, res) => res.send('Hello, friend'))

router.get('/:id', postController.show);

module.exports = router;
module.exports = server