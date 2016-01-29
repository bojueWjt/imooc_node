var User = require("../models/user");
var app = require("../../app.js");


function userSignup(req,res){

	var _user = req.body.user;

	User.find({username:_user.username},function(err,user){

		if(err){

			console.log(err);
		}

		console.log(user)

		console.log(user.length )

		if(user.length != 0){

			res.redirect("/");
		}else{

			var user = new User(_user);

			user.save(function(err,user){

				console.log("ninicocococ")

				if(err){

					console.log(err);
				}

				console.log(user);

			});
		}
	});
};

function userSignin(req,res){

	var user = req.body.user;

	User.findOne({username:user.username},function(err,mUser){

		if(err){

			console.log(err);
		}

		if(!mUser){

			res.redirect("/");
		}else{

			mUser.compare(user.password,function(err,isMatch){

				if(err){

					console.log(err);
				}

				if(isMatch){

					req.session.user = mUser;

					console.log("the password is match");
				}else{

					console.log("the password is not match");
				}

				res.redirect("/");
			});
		}
	});
}

function logout(req,res){

	delete req.session.user;
	app.publicMethod.deleteUser();

	res.redirect("/");
}




exports.userSignup = userSignup;

exports.userSignin = userSignin;

exports.logout = logout;