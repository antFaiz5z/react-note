var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render("index",{ title : "react-note" });
});

router.get('/init', function(req,res,next){/*请求参数，相应参数和负责把错误信息运送出来的next参数*/
	var noteModel=global.dbHandle.getModel("note");/*获取note数据库模型，模型能直接对数据库进行操作*/
	noteModel.find({},function(err,notes){
		if(err){
			return next(err);
		}else{
			res.json(notes);
		}
	})
});

router.post('/addNote', function(req,res,next){
	var newNote=req.body;
	var noteModel=global.dbHandle.getModel("note");
	noteModel.create(newNote,function(err){
		if(err){
			return next(err);
		}else{
			console.log("blog written success!");
			noteModel.find({},function(err,notes){
				if(err){
					console.log("blog written error!");
				}else{
					res.json(notes);
				}
			});
		}
	});
});

 router.post('/deleteNote', function(req,res,next){
 	var  delete_date=req.body.date;
 	var noteModel=global.dbHandle.getModel("note");
 	noteModel.remove({date : delete_date},function(err){
 		if(err){
 			return next(err);/*错误的话，把错误给运出来*/
 		}else{
 			console.log("blog delete success!");
 			noteModel.find({},function(err,notes){
 				if(err){
 					console.log("blog delete error!");
 				}else{
 					res.json(notes);
 				}
 			});
 		}
 	});
 });
module.exports = router;
