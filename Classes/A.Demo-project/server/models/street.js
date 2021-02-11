const mongoose = require('mongoose');

const streetSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  homes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'House',
    },
  ],
});

module.exports = mongoose.model('Street', streetSchema);
