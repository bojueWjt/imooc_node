var express = require("express");
var path = require("path");
var port = process.env.PORT || 3000;
var app = express();

app.set("views","./views");
app.set("view engine", "jade");
app.locals.basedir = path.join(__dirname, 'views');
app.listen(port);

app.get("/",function(req,res){

	res.render("index",{
		title:"一个node小程序"
	});

});

app.get("/movie/:id",function(req,res){

	res.render("detail",{
		title:"电影详情页面"
	});
});

app.get("/admin/movie",function(req,res){

	res.render("admin",{
		title:"电影后台录入页面"
	});
});

app.get("/admin/list",function(req,res){

	res.render("list",{
		title:"电影列表页面"
	});
});

console.log("imooc_node is start.... on " + port);