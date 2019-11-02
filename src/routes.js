const router = require("express").Router();
const examplesController = require("./controllers/examplesController");

router.get("/", examplesController.getExample)

module.exports = router;
