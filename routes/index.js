var Index = require("../app/controllers/index");
var Movie = require("../app/controllers/movie");
var User = require("../app/controllers/user");
var Comment = require("../app/controllers/comment");
var _ = require("underscore");
var app = require("../app.js");

exports.config = function(app){

	app.get("*",function(req,res,next){

		console.log("ninico");
		if(req.session.user){

			app.locals.user = req.session.user;
		}

		next();
	});

	app.get("/",Index.index);
	app.get("/movie/:id",Movie.detail);
	app.get("/admin/*",User.signinRequired,User.adminRequired);
	app.get("/admin/movie",Movie.admin);
	app.get("/admin/movie/list",Movie.list);
	app.get("/admin/movie/:id",Movie.detail);
	
	app.get("/admin/movie/update/:id",Movie.toUpdate);
	app.post("/admin/movie/addMovie",Movie.addMovie);
	app.delete("/admin/movie/delete",Movie.deleteMovie);
	app.get("/signin",User.signin);
	app.get("/signup",User.signup);
	app.post("/user/signup",User.userSignup);
	app.post("/user/signin",User.userSignin);
	app.get("/user/logout",User.logout);
	app.post("/movie/user/comment",Comment.saveComment);
}


