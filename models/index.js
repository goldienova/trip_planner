const db = require('./db');

//add our models here once we get them
const Activity = require('./activity');
const Hotel = require('./hotel');
const Place = require('./place');
const Restaurant = require('./Restaurant');

module.exports = {
	db: db,
	Activity: Activity,
	Hotel: Hotel,
	Place: Place,
	Restaurant: Restaurant
}