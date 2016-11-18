const Sequelize = require('sequelize');
const db = require('./db');


var Activity = db.define('activity', function(){
	name: {
		type: Sequelize.STRING
	},
	age_range: {
		type: Sequelize.STRING
	}
	
})

module.exports = Activity;