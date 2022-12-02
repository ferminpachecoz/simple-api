const express = require('express');
const router = express.Router();
const multer = require('multer');
let path = require('path');

const storage = multer.memoryStorage()
const upload = multer({storage: storage});

router.get('/', function(req, res, next) {
  res.send("Hello World!");
});

module.exports = router;