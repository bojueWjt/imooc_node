var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var mongoose = require("mongoose");
var mongoStore = require("connect-mongo")(session);
var routes = require("./routes");
var bodyParser = require("body-parser");
var morgan = require('morgan')
var port = process.env.PORT || 3000;
var app = express();

const dbConnect = "mongodb://localhost/imooc_node";

var db = mongoose.connect(dbConnect);

var urlencodedParser = bodyParser.urlencoded({extended:false});

app.set("views","./app/views");
app.set("view engine", "jade");
app.use(express.static("public"));
app.use(cookieParser());
app.use(session({
	secret:"ninico",
	store:new mongoStore({
		url: dbConnect,
		collection:"sessions"
	})
}));
app.use(bodyParser.urlencoded({extended: true}));
app.locals.moment = require("moment");
app.locals.basedir = path.join(__dirname, 'views');
app.listen(port);

routes.config(app);

if("development" == app.get("env")){

	app.set("showStackError",true);
	app.use(morgan('dev'));
	app.locals.pretty = true;
	mongoose.set("debug",true);
}



console.log("imooc_node is start.... on " + port);

exports.publicMethod = {

	setUser:function(user){

		return app.locals.user = user;
	},
	
	deleteUser:function(){

		delete app.locals.user;
	}

}