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

async function create (req, res) {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post)
    } catch (err) {
        res.status(422).json({err})
    }
}

module.exports = { index, show, create }