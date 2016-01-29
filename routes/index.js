var Index = require("../app/controllers/index");
var Movie = require("../app/controllers/movie");
var User = require("../app/controllers/user");
var _ = require("underscore");
var app = require("../app.js");

exports.config = function(app){

	app.get("/",Index.index);
	app.get("/movie/:id",Movie.detail);
	app.get("/admin/movie",Movie.admin);
	app.get("/admin/list",Movie.list);
	app.get("/movie/update/:id",Movie.toUpdate);
	app.post("/admin/addMovie",Movie.addMovie);
	app.delete("/admin/list",Movie.deleteMovie);
	app.post("/user/signup",User.userSignup);
	app.post("/user/signin",User.userSignin);
	app.get("/user/logout",User.logout);
}


