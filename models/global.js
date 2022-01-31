const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GlobalSchema = new Schema({
  currentYear: {
    type: String,
    required: true
  }
});

const GlobalModel = mongoose.model('global', GlobalSchema);

module.exports = GlobalModel;
