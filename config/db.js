const mongoose = require('mongoose')
const mongoUri = 'mongodb+srv://akash:akash123%40%23@short-url.qrtsyid.mongodb.net/?retryWrites=true&w=majority'
mongoose.set('strictQuery', true);

const connectDb = () => {
  mongoose.connect(mongoUri, () => {
    console.log('db is connected');
  })
}

module.exports = connectDb