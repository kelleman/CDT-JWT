const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.DB_URI;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('Connected to Database'))
.catch(err=>console.log('error:', err.message))

module.exports = mongoose.connection;
