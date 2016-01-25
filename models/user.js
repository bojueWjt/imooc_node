var mongoose = require("mongoose");
var UserSchema = require("../schemas/user");

var User = mongoose.models("User",UserSchema);

module.exports = User;