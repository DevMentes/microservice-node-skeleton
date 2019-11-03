const eventHandler = require("./../events/eventHandler");
const logEventService = require("./../services/logEventService");

const subscriber = eventHandler.client;

const init = () => {
  subscriber.on("message", function(channel, message) {
    console.log("Message: " + message + "on channel:" + channel + "is arrive!");
    logEventService(JSON.parse(message));
  });
  subscriber.subscribe("userWasRegistered");
};

module.exports = {
  init
};
