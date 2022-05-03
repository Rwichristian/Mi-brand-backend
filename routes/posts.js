const express = require('express');
const router = express.Router();
const { getAllPosts, createPost, getPost, deletePost, updatePost, handlelike } = require('../controllers/postscontroller');

const {protect} = require('../middleware/authMiddleware')

router.get('/', getAllPosts);

router.post('/', protect,createPost);

router.get('/:postId' , protect,  getPost );

router.put('/like/:postId' , protect, handlelike);

router.delete('/:postId' , protect, deletePost);

router.patch('/:postId' , protect, updatePost );

module.exports = router;