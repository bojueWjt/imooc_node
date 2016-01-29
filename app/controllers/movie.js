var Movie = require("../models/movie");
var _ = require("underscore");



//电影细节路由 ／movie/id
function detail(req,res){

	var id = req.params.id;

	Movie.findById(id,function(err,movie){

		res.render("detail",{movie:movie});
	})

}

//后台录入页 ／admin/movie
function admin(req,res){

	res.render("admin",{
		title:"后台电影录入页面",
		movie:{
			title:"",
			doctor:"",
			country:"",
			language:"",
			year:"",
			poster:"",
			summary:"",
			flash:""
		}
	});
}


//后台列表页 /admin/list
function list(req,res){

	Movie.fetch(function(err,movies){

		res.render("list",{
			title:"电影列表页面",
			movies:movies
		});

	});
	
}

//后台更新请求跳转到更新页面
function toUpdate(req,res){

	var id = req.params.id;

	console.log(id);

	if(id){

		Movie.findById(id,function(err,movie){

			if(err){

				console.log(err);
			}

			res.render("admin",{
				title:"更新电影信息",
				movie:movie
			});
		});
	}
};

//新增电影信息post请求
function addMovie(req,res){

	var movieObj = req.body;
	var _movie;

	if(movieObj._id !== "undefined"){

		console.log(typeof movieObj._id)
		console.log(typeof movieObj._id !== "undefined")

		console.log("Ninico")

		Movie.findById(movieObj._id,function(err,movie){

			if(err){

				console.log(err)
			}else{

				_movie = _.extend(movie,movieObj);
				_movie.save(function(err,movie){

					if(err){

						console.log(err);
					}

					res.redirect("/movie/" + movie._id);
				})
			}
		})

	}else{

		var movie = new Movie({
			title:movieObj.title,
			doctor:movieObj.doctor,
			country:movieObj.country,
			language:movieObj.language,
			year:movieObj.year,
			summary:movieObj.summary,
			poster:movieObj.poster,
			flash:movieObj.flash
		});

		movie.save(function(err,data){

			if(err){

				console.log(err);
			}else{

				res.redirect("/movie/" + data._id);
			}
		});	
	}

};

//删除movie操作
function deleteMovie(req,res){

	var id = req.query._id;
	console.log(id);

	if(id){

		Movie.remove({_id:id},function(err,movie){

			if(err){

				console.log(err);
			}else{

				console.log(movie);

				res.json({success:1})
			}
		});
	}

}


exports.detail = detail

exports.admin = admin;

exports.list = list;

exports.toUpdate = toUpdate;

exports.addMovie = addMovie;

exports.deleteMovie = deleteMovie;