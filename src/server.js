const app = require('./app');

const PORT = process.env.PORT || 8080;
const connectDB = require('./config/db');

connectDB();

app.listen(PORT, () => {
  console.log('Server on with port: ', PORT);
});
