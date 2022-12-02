const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const multer = require('multer');
let path = require('path');

const storage = multer.memoryStorage()
const upload = multer({storage: storage});

router.get('/', function(req, res, next) {
  res.send("Hello World!");
});
router.get('/actividades', mainController.list);

module.exports = router;