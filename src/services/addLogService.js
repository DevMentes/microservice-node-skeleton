const uuid = require("uuid/v4");
const Log = require("./../models/Log");

module.exports = async event => {
  const {
    serviceId = "",
    occurredAt = Date.now(),
    type = "info",
    data = {}
  } = event;

  const log = {
    _id: uuid(),
    serviceId: serviceId,
    occurredAt: occurredAt,
    type: type,
    data: data
  };

  try {
    await Log.create(log);
  } catch (e) {
    console.log("error: ", e);
  }
};
