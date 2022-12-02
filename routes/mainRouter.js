const express = require('express');
const router = express.Router();
const multer = require('multer');
let path = require('path');
const mainController = require('../controllers/mainController');

const storage = multer.memoryStorage()
const upload = multer({storage: storage});

router.get('/', function(req, res, next) {
  res.send("Hello World!");
});
router.get('/actividades', mainController.list);
router.post('/agregar-imagen', upload.single('file'), mainController.addImage)
router.get('/images', mainController.getImages)

module.exports = router;