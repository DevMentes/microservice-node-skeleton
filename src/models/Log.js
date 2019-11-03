const mongoose = require("./../persistence/Mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
  _id: String,
  serviceId: String,
  occurredAt: Date,
  type: String,
  data: {}
});

module.exports = mongoose.model("Log", schema);
