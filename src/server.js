const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;
const connectDB = require('../config/db');

connectDB();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CREATE ROUTER
const authRoute = require('./routes/auth.route');

app.use('/api/auth', authRoute);

app.listen(PORT, () => {
  console.log('Server on with port: ', PORT);
});
