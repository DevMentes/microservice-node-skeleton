const redis = require("redis");
const config = require("./../config");

const client = redis.createClient({ host: config.redisHost });
const dispatch = async (event, data) => {
  await client.publish(event, JSON.stringify(data));
};

module.exports = {
  client,
  dispatch
};
