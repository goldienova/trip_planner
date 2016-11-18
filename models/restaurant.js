const Sequelize = require('sequelize');
const db = require('./db');


var Restaurant = db.define('restaurant', function(){
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
	
})

module.exports = Restaurant;