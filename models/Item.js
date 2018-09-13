const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

const db = require('../config/keys').mongoURI;

var connection = mongoose.createConnection(db)

autoIncrement.initialize(connection);

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

ItemSchema.plugin(autoIncrement.plugin, {
  model: 'item',
  startAt: 1
})

module.exports = Item = connection.model('item', ItemSchema);
