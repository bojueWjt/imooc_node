var app = require("../../app.js");
var Movie = require("../models/movie");

//处理主页路由 ／
exports.index = function(req,res){



	Movie.fetch(function(err,moviesinfo){

		if(err){

			console.log(err);
		}else{

			res.render("index",{
				title:"一个node小程序",
				movies:moviesinfo
			});
		}
		
	});
}
