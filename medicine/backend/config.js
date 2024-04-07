// config.js
const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://medicine:medicine@cluster0.7taets3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Update with your MongoDB URI

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
