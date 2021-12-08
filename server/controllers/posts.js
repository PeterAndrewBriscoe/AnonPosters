const Post = require('../models/posts');

async function index(req, res) {
    try {
        const post = await Post.all;
        res.status(200).json(post);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function show(req, res) {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json({ post });
    } catch (err) {
        res.status(500).send(err);
    };
}

module.exports = { index, show }