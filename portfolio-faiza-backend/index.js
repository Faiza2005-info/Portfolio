require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const contactRoutes = require('./routes/contact.routes');
const authRoutes = require('./routes/user.routes');

const app = express();

// integrate with frontend
app.use(cors({ origin: "http://localhost:5173" })); 
app.use(express.json());


// Routes
app.use('/contact', contactRoutes);
app.use('/auth', authRoutes);




//connet to database
mongoose.connect(process.env.MONGO_URI,
    { serverSelectionTimeoutMS: 5000 })
    
    .then(() => {
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`the Server is starting on ${PORT} `);
        })
    }).catch((err) => {
        console.log("DB connection error:", err);
    })

    



