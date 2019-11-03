const router = require("express").Router();
const logsController = require("./controllers/logsController");
const eventsController = require("./controllers/eventsController");

router.get("/logs", logsController.getLogs);
router.get("/events", eventsController.getEvents);

module.exports = router;
