var express = require("express");
var path = require("path");
var routes = require("./routes")
var port = process.env.PORT || 3000;
var app = express();

app.set("views","./views");
app.set("view engine", "jade");
app.use(express.static("bower_components"));
app.use(express.static("public"))
app.locals.basedir = path.join(__dirname, 'views');
app.listen(port);

app.get("/",routes.index);

app.get("/movie/:id",routes.detail);

app.get("/admin/movie",routes.admin);

app.get("/admin/list",routes.list);

console.log("imooc_node is start.... on " + port);