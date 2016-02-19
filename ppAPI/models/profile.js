// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Shema
var profileSchema = new mongoose.Schema({
firstname: String,
lastname: String,
number: String,
city: String,
team: String,
position: String
});

// Return model
module.exports = restful.model('Profiles', profileSchema);