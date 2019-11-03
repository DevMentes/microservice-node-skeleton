const Log = require("./../models/Log");

module.exports = async (request, response) => {
  try {
    const logs = await Log.find({});
    response.json({
      data: logs.map(({ _doc: { _id, ...log } }) => {
        return {
          id: _id,
          ...log
        };
      })
    });
  } catch (e) {
    response.json({ error: e });
  }
};
