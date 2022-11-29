let express = require('express');
let router = express.Router();
let path = require('path');
let mainController = require('../controllers/mainController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/index.html'));
});
router.get('/api', mainController.home)

module.exports = router;
