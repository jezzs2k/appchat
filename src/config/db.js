const { connect } = require('mongoose');
const defaultValue = require('./default');

const mongoURL = defaultValue.MONGO_URL;

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
