const mongoose = require('mongoose');
const { Schema } = mongoose;

const coinDataSchema = new Schema({
  userCoin: String,
  userAmount: Number,
  boughtPrice: Number,
  date: String,
});

const coinModelData = mongoose.model('coinModelData', coinDataSchema);

module.exports = coinModelData;
