// Routes
module.exports = function(app){
	
	require('mongoose');
	
	var bodyParser = require('body-parser');
	var Trip = require('../model/Trip');

	var urlencodedParser = bodyParser.urlencoded({ extended: false })

    //Add Trip
    app.post('/add_trip',function (req, res) {
    	//Lets create a new user
    	console.log(req.body.tittle);
    	var trip = new Trip({tittle: req.body.tittle, destination:req.body.destination, description:req.body.description});
   		//Lets save it
   		trip.save(function (err, userObj) {
   		  if (err) {
   		    console.log(err);
   		  } else {
  		    console.log('saved successfully:', userObj);
   		  }
   		});
   		res.end();
   	})

};