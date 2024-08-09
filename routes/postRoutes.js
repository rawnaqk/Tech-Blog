const express = require('express');
const router = express.Router();
const { createPost, updatePost, deletePost } = require('../controllers/postController');

router.post('/new', createPost);
router.post('/:id/update', updatePost);
router.post('/:id/delete', deletePost);

module.exports = router;
