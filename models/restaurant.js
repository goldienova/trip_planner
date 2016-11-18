const Sequelize = require('sequelize');
const db = require('./db');

const Place = require('./place');


var Restaurant = db.define('restaurant', {
	name: {
		type: Sequelize.STRING
	},
	cuisine: {
		type: Sequelize.STRING    //comma delimited string list
	},
	price: {
		type: Sequelize.INTEGER,
		validate: { min: 1, max: 5} //integer from 1-5 for how many dollar signs
	}
	
});

Restaurant.belongsTo(Place);

module.exports = Restaurant;