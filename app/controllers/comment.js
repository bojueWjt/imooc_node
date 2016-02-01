var Comment = require("../models/comment");

function saveComment(req,res){

	var mComment = req.body.comment;
	var movieId = mComment.movie;

	console.log(mComment);
	if(mComment.cId){

		Comment.findById(mComment.cId,function(err,comment){

			if(err){

				console.log(err)
			}

			var reply = {
				from:mComment.from,
				to:mComment.tId,
				content:mComment.content
			}

			if(comment){

				comment.reply.push(reply);
			}

			console.log(reply);

			comment.save(function(err,comment){

				if(err){

					console.log(err)
				}

				console.log(comment);

				res.redirect("/movie/" + movieId);
			})
		})

	}else{

		var comment = new Comment(mComment);

		comment.save(function(err,comment){

			if(err){

				console.log(err);
			}

			res.redirect("/movie/" + movieId);
		});
	}

}

exports.saveComment = saveComment;