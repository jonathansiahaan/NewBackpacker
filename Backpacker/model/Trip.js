// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  tittle: { type: String, required: true, unique: true },
  destination: { type: String, required: true, unique: true },
  description: String
});

var Trip = mongoose.model('Trip', userSchema);

// make this available to our users in our Node applications
module.exports = Trip;