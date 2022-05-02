const express = require('express');
const router = express.Router();
//const {emailSchema} = require('../controllers/messagecontroller');
const { createComment, getAllComments, getComment, deleteComment } = require('../controllers/commentscontroller');
const {protect} = require ('../middleware/authMiddleware');
router.get('/', protect, getAllComments);

router.post('/', protect, createComment);

router.get('/:commentId' , protect, getComment );

router.delete('/:commentId' , protect, deleteComment);


module.exports = router;