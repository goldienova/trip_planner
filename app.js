const express = require('express');
const pipeline = express();
const bodyparser = require('body-parser');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const models = require('./models')
const routes = require('./routes');

pipeline.use(bodyParser.urlencoded({ extended: false });
pipeline.use(bodyParser.json());

pipeline.engine('html',nunjucks.render);
pipeline.set('view engine','html');
nunjucks.configure('views',{noCache:true});

pipeline.use(morgan(‘dev’));

pipeline.use(express.static(__dirname + "/node_modules"));
pipeline.use(express.static(__dirname + '/public'));


pipeline.use('/', routes)

// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.render(
    // ... fill in this part
  );
});


pipeline.listen(3000, function(err){
	if(err) return console.error(err);
	console.log('Server is listening on port 3000');
})
