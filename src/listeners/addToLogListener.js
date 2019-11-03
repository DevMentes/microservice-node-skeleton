const eventHandler = require("./../events/eventHandler");
const addLogService = require("./../services/addLogService");

const subscriber = eventHandler.client;

const init = () => {
  subscriber.on("message", function(channel, message) {
    console.log("Message: " + message + "on channel:" + channel + "is arrive!");
    addLogService(JSON.parse(message));
  });
  subscriber.subscribe("addToLog");
};

module.exports = {
  init
};
