var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var SALT_WORK_FACTOR = 10;

var UserSchema = new mongoose.Schema({

	username:{
		type:String,
		unique:true
	},
	password:String,
	meta:{

		createAt:{
			type: Date,
			default: Date.now()
		},
		upDateAt:{
			type: Date,
			default: Date.now()
		}
	}
});

UserSchema.pre("save",function(next){

	if(this.isNew){

		this.meta.createAt = this.meta.updateAt = Date.now();
	}else{

		this.meta.updateAt = Date.now();
	}

	bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt){

		if(err) return next(err);

		bcrypt.hash(user.password,salt,function(err,hash){

			if(err) return next(err);

			user.password = hash;
		});
	});
});

UserSchema.statics = {

	fetch:function(cd){

		this.find({}).
			sort("meta.updateAt").
			exec(cd);
	},
	findById:function(id,cd){

		this.findOne({_id:id}).
			exec(cd);
	}

}

module.exports = UserSchema;