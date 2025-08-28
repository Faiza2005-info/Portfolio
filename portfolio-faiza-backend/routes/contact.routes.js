const express = require('express');
const {createMessage,getMessages,isRead,isReadAll} = require('../controllers/contact');
const adminMiddleware = require('../middlewares/adminMiddleware');
const router = express.Router();

// Public : envoyer un message
router.post('/', createMessage )

// Admin only : voir tous les messages
router.get('/', adminMiddleware, getMessages)

// Admin only : marquer message comme lu
router.put('/:id/read', adminMiddleware, isRead);

// Admin only : marquer tous les messages comme lus
router.put('/read-all', adminMiddleware, isReadAll)

module.exports = router;
