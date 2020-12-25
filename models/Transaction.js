const { model, Schema } = require('mongoose');

const transactionSchema = new Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add some text'],
  },
  amount: {
    type: Number,
    required: [true, 'Please add a positive or a negative number'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model('Transaction', transactionSchema);
