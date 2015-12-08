// Routes
module.exports = function(app){

	require('mongoose');
	var User = require('../model/User');
	
    app.get('/getangularusers', function (req, res) {
    	res.header("Access-Control-Allow-Origin", "http://localhost");
    	res.header("Access-Control-Allow-Methods", "GET, POST");   
		res.writeHead(200, {'Content-Type': 'application/json'}); // Sending data via json
		str='[';
		str = str + '{ "name" : "' + "Jonathan" + '"},' +'\n';
		str = str + '{ "name" : "' + "Jonathan2" + '"},' +'\n';
		str = str + '{ "name" : "' + "abc" + '"},' +'\n';
		str = str + '{ "name" : "' + "vgc" + '"},' +'\n';
		str = str + '{ "name" : "' + "Yohannes" + '"},' +'\n';
		str = str + '{ "name" : "' + "Indri" + '"},' +'\n';
		str = str.trim();
		str = str.substring(0,str.length-1);
		str = str + ']';
		res.end( str);
    });
    
    app.get('/login/:email',function(req,res){
    	res.header("Access-Control-Allow-Origin", "http://localhost");
    	res.header("Access-Control-Allow-Methods", "GET, POST");   
    	res.writeHead(200, {'Content-Type': 'application/json'}); // Sending data via json
    	str='[';
    	//Lets try to Find a user
    	User.findOne({name: req.params.email}, function (err, userObj) {
    	  if (err) {
    	    console.log(err);
    	  } else if (userObj) {
    		  str = str + '{ "message" : "' + "Benar" + '"},' +'\n';
    	    
    	  } else {
    		  str = str + '{ "message" : "' + "Salah" + '"},' +'\n';
    	  }
    	});
    	str = str.trim();
		str = str.substring(0,str.length-1);
		str = str + ']';
    	res.end(str);
    	
    });
    

    
    
};