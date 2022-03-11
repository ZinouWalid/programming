var express = require("express");
var router = express.Router();
let User = require("../Models/UserShema");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Hello Users");
});

module.exports = router;
