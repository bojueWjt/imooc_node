var express = require("express");
var path = require("path");
var routes = require("./routes");
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended:false});

app.set("views","./views");
app.set("view engine", "jade");
app.use(express.static("public"));
app.locals.moment = require("moment");
app.locals.basedir = path.join(__dirname, 'views');
app.listen(port);

app.get("/",routes.index);

app.get("/movie/:id",routes.detail);

app.get("/admin/movie",routes.admin);

app.get("/admin/list",routes.list);

app.get("/movie/update/:id",routes.toUpdate);

app.post("/admin/addMovie",urlencodedParser,routes.addMovie);

app.delete("/admin/list",routes.deleteMovie);

console.log("imooc_node is start.... on " + port);