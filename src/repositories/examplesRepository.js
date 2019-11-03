const Example = require("../models/Log");

const byId = async (exampleId) => {
    return await Example.findById(exampleId);
};

const all = async () => {
    return await Example.find({});
};

module.exports = {
    byId,
    all
};
