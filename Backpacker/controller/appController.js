// Routes
module.exports = function(app){
	
	require('mongoose');
	
	var bodyParser = require('body-parser');
	var User = require('../model/User');

	var urlencodedParser = bodyParser.urlencoded({ extended: false })
	
    //Login Routes
    app.post('/login_post', urlencodedParser, function (req, res) {
    	//Lets try to Find a user
    	User.findOne({name: req.body.email, password:req.body.password}, function (err, userObj) {
    	  if (err) {
    	    console.log(err);
    	  } else if (userObj) {
    	    res.redirect("/menu");
    	  } else {
    		  res.render('index', {message: 'Username or Password wrong'});
    	  }
    	});
    })
    
    app.get('/menu',function(req,res){
    	res.render('menu');
    });
    
    app.get('/register', function(req, res){
    	res.render('register', {title: 'Contact'});
    });


    app.get('/login', function(req, res){
    	res.render('index', {message: ''});
    });

    //Register Post
    app.post('/register_post', urlencodedParser, function (req, res) {
    	//Lets create a new user
    	var user1 = new User({name: req.body.email, password:req.body.password, roles: ['user']});
   		//Lets save it
   		user1.save(function (err, userObj) {
   		  if (err) {
   		    console.log(err);
   		  } else {
  		    console.log('saved successfully:', userObj);
   		  }
   		});
	    res.redirect("/login");
   		//res.render('index',{message:'Register Success'});
   	})

};