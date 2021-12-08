const express = require('express');
const cors = require('cors');

const server = express();
const router = express.Router();
server.use(cors());
server.use(express.json());


server.get('/', (req, res) => res.send('Hello there, old friend'))

router.get('/:id', authorsController.show);

module.exports = router;
module.exports = server