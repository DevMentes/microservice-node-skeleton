const mongoose = require("./../persistence/Mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
  _id: { type: String },
  name: { type: String }
});

module.exports = mongoose.model("Example", schema);
