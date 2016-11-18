const Sequelize = require('sequelize');
const db = require('./db');

const Place = require('./place');


var Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING
	},
	num_stars: {
		type: Sequelize.INTEGER,
		validate: { min: 1, max: 5}   //Integer from 1 to 5
	},
	amenities: {
		type: Sequelize.STRING   //comma delimited string list
	}

});

Hotel.belongsTo(Place);

module.exports = Hotel;