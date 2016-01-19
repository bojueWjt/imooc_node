var mongoose = require("mongoose");

var MovieSchema = new mongoose.Schema({
	title:String,
	doctor:String,
	country:String,
	language:String,
	summary:String,
	poster:String,
	flash:String,
	year:Number,
	meta:{
		createAt:{
			type:Date,
			default: Date.now()
		},
		updateAt:{
			type:Date,
			default: Date.now()
		}
	}
});


MovieSchema.pre("save",function(next){

	if(this.isNew){

		this.meta.createAt = this.updateAt = Date.now();
	}else{

		this.meta.updateAt = Date.now();
	}

	next();
});

MovieSchema.statics = {

	fetch:function(){

		return this.find({})
			.sort("updateAt")
			.exec(cd);
	},
	findById:function(id){

		return this.findOne({
			_id: id
		})
		.exec(cd);
	}
}

module.exports = MovieSchema;