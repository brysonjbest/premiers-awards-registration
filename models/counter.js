const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Auto-increment counter schema
 */

const CounterSchema = new Schema({
  _id: {type: String, required: true},
  seq: { type: Number, default: 0 }
});
const CounterModel = mongoose.model('Counter', CounterSchema, 'counters');

module.exports = CounterModel;
