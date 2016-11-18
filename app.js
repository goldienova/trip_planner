const express = require('express');
const pipeline = express();
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const models = require('./models')
const routes = require('./routes');
const Promise = require('bluebird');
const db = models.db;

pipeline.use(bodyParser.urlencoded({ extended: false }));
pipeline.use(bodyParser.json());

pipeline.set('view engine','html');
pipeline.engine('html',nunjucks.render);
nunjucks.configure('views',{noCache:true});

pipeline.use(morgan('dev'));

pipeline.use(express.static(__dirname + "/node_modules"));
pipeline.use(express.static(__dirname + '/public'));


//pipeline.use('/', routes)
pipeline.get('/', function(req, res, next){
  //console.dir(hotel);
  var findingHotels = models.Hotel.findAll();
  var findingRestaurants = models.Restaurant.findAll();
  var findingActivities = models.Activity.findAll();

  Promise.all([findingHotels, findingRestaurants, findingActivities])
    .then(function(hotels, restaurants, activities){
      res.render('index', {
        templateHotels: hotels,
        templateRestaurants: restaurants,
        templateActivities: activities
      });
    })
    .catch(next);
});

// catch 404 (i.e., no route was hit) and forward to error handler
pipeline.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// handle all errors (anything passed into `next()`)
pipeline.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.render(
    // ... fill in this part
  );
});

db.sync()
  .then(function(){
    pipeline.listen(3000, function(err){
      if(err) return console.error(err);
      console.log('Server is listening on port 3000');
    });
  })
  .catch(console.err);

