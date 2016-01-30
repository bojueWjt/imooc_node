var User = require("../models/user");
var app = require("../../app.js");


function signin(req,res){

	res.render("signin",{
		title:"登陆页面"
	});
};

function signup(req,res){

	res.render("signup",{
		title:"注册页面"
	});
};

function userSignup(req,res){

	var _user = req.body.user;

	User.find({username:_user.username},function(err,user){

		if(err){

			console.log(err);
		}

		if(user.length != 0){

			res.redirect("/signup");
		}else{

			var user = new User(_user);

			user.save(function(err,user){

				if(err){

					console.log(err);
				}

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

			res.redirect("/signin");
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

function signinRequired(req,res,next){

	if(!req.session.user){
		return res.redirect("/signin");
	}

	next();
};

function adminRequired(req,res,next){

	var role = req.session.user.role;
	if(role <= 10 || !role){

		return res.redirect("/");
	}

	next();
};



exports.signin = signin;

exports.signup = signup;

exports.userSignup = userSignup;

exports.userSignin = userSignin;

exports.logout = logout;

exports.signinRequired = signinRequired;

exports.adminRequired = adminRequired;