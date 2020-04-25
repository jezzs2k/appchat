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
const userRoute = require('./routes/user.route');
const contactRoute = require('./routes/contact.route');

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/contacts', contactRoute);

app.listen(PORT, () => {
  console.log('Server on with port: ', PORT);
});
