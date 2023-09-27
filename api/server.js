// server.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors')
const authRoutes = require('./routes/authRoutes');
const db = require('./db/connection');

dotenv.config();
const app = express();
const port = process.env.PORT || 3030;

// middleware
app.use(bodyParser.json());
app.use(cors())

// routes
app.use('/api', authRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
