const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// CREATE ROUTER
const authRoute = require('./routes/auth.route');
const userRoute = require('./routes/user.route');
const contactRoute = require('./routes/contact.route');
const conversationRoute = require('./routes/Conversation.route');
const messengerRoute = require('./routes/messenger.route');

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/contacts', contactRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/messengers', messengerRoute);

module.exports = app;
