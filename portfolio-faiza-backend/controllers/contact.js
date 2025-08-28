const Contact = require('../models/Contact');


// POST - Ajouter un message
const createMessage = async (req, res) => {
  const {email, message} = req.body;

  if(!email || !message){
    return res.status(400).json({ message: 'All fields are required.' });
  }
  try {
    const contact = new Contact({
      email,
      message
    });

    await contact.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


// GET - Récupérer tous les messages
const getMessages =  async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


// Mark message as read (admin only)
const isRead = async (req, res) => {
  try {
    await Contact.findByIdAndUpdate(req.params.id, { isRead: true });
    res.json({ message: 'Message marked as read' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// marquer tous les messages non lus sans id 
const isReadAll= async (req, res) => {
  try {
    const result = await Contact.updateMany({ isRead: false }, { isRead: true });
    res.json({ message: `${result.modifiedCount} messages marked as read` });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = { createMessage, getMessages,isRead,isReadAll };
