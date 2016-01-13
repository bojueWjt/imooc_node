function index(req,res){

	res.render("index",{
		title:"一个node小程序",
		movies:[{
			_id:0,
			title:"西游记之大圣归来",
			poster:"img/poster.jpg"
		},{
			_id:0,
			title:"西游记之大圣归来",
			poster:"img/poster.jpg"
		},{
			_id:0,
			title:"西游记之大圣归来",
			poster:"img/poster.jpg"
		},{
			_id:0,
			title:"西游记之大圣归来",
			poster:"img/poster.jpg"
		},{
			_id:0,
			title:"西游记之大圣归来",
			poster:"img/poster.jpg"
		},{
			_id:0,
			title:"西游记之大圣归来",
			poster:"img/poster.jpg"
		}]
	});

}


function detail(req,res){

	res.render("detail",{
		title:"电影详情页面",
		movie:{
			title:"西游记之大圣归来",
			doctor:"田晓鹏",
			country:"中国大陆",
			language:"汉语普通话／粤语",
			year:"2015-07-10",
			summary:"五百年前，由石猴变化而成的齐天大圣孙悟空（张磊 配音）大闹天宫，最终被如来佛祖镇在了五行山下。此去经年，长安城内突然遭到山妖洗劫，童男童女哭声连连，命悬一线。危机时刻，自幼被行脚僧法明（吴文伦 配音）抚养长大的江流儿（林子杰 配音）救下了一个小女孩，结果反遭山妖追杀。经过一番追逐，江流儿无意中解除了孙悟空的封印，齐天大圣自然好好地将山妖教训了一番。因为封印未解开，悟空不得不护送江流儿和小女孩回长安，一路上又遭遇了猪八戒（刘九容 配音）和白龙马.<br/>与此同时，妖王（童自荣 配音）绝不甘心失败，他躲在暗中，等待着给孙悟空一行致命一击的良机……",
			flash:"http://static.hdslb.com/miniloader.swf?aid=2498218&page=1"
		}
	})
}


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

function list(req,res){

	res.render("list",{
		title:"电影列表页面",
		movies:[{
			title:"西游记之大圣归来" ,
			doctor:"田晓鹏",
			country:"中国大陆",
			language:"汉语普通话／粤语",
			year:"2015-07-10",
			meta:{
				createAt: new Date()
			}
		},
		{
			title:"西游记之大圣归来" ,
			doctor:"田晓鹏",
			country:"中国大陆",
			language:"汉语普通话／粤语",
			year:"2015-07-10",
			meta:{
				createAt: new Date()
			}
		},
		{
			title:"西游记之大圣归来" ,
			doctor:"田晓鹏",
			country:"中国大陆",
			language:"汉语普通话／粤语",
			year:"2015-07-10",
			meta:{
				createAt: new Date()
			}
		},
		{
			title:"西游记之大圣归来" ,
			doctor:"田晓鹏",
			country:"中国大陆",
			language:"汉语普通话／粤语",
			year:"2015-07-10",
			meta:{
				createAt: new Date()
			}
		},
		{
			title:"西游记之大圣归来" ,
			doctor:"田晓鹏",
			country:"中国大陆",
			language:"汉语普通话／粤语",
			year:"2015-07-10",
			meta:{
				createAt: new Date()
			}
		},
		{
			title:"西游记之大圣归来" ,
			doctor:"田晓鹏",
			country:"中国大陆",
			language:"汉语普通话／粤语",
			year:"2015-07-10",
			meta:{
				createAt: new Date()
			}
		}]
	})
}


exports.index = index;

exports.detail = detail

exports.admin = admin;

exports.list = list;