let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let cors = require('cors')

let mainRouter = require('./routes/mainRouter.js');

let app = express();

// view engine setup
/* app.set('views', path.join(__dirname, 'views')); */
/* app.set('view engine', 'jade'); */


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRouter);

app.listen(3001, ()=>{
  console.log("servidor corriendo en http://localhost:3001/")
})

module.exports = app;
