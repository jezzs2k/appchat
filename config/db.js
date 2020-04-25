const { connect } = require('mongoose');
const config = require('config');

const mongoURL = config.get('MONGO_URL');

const connectDB = async () => {
  try {
    await connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log('MongoDb connect ....');
  } catch (err) {
    console.error('Connect error');
  }
};

module.exports = connectDB;
