const express = require('express');
const router = express.Router();
//const {emailSchema} = require('../controllers/messagecontroller');
const { getAllMessages, createMessage, getMessages, deleteMessage } = require('../controllers/messagecontroller');
const {protect} = require ('../middleware/authMiddleware');
router.get('/', protect, getAllMessages);

router.post('/', protect, createMessage);

router.get('/:messageId' , protect, getMessages );

router.delete('/:messageId' , protect, deleteMessage);


module.exports = router;