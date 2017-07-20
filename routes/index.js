var express = require('express');
var router = express.Router();

var conn=require('../mysql/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/c/a',function (req,res) {
    let sql = `SELECT * FROM movielist`;
    conn.query(sql,function(err,result){
        if(err){
            res.send({success:false,data:err.message});
        }else{
            // console.log(result);
            res.send({success:true,data:result});
        }
    });
})

router.get('/c/m',function (req,res) {
    let sql = `SELECT * FROM movie`;
    conn.query(sql,function(err,result){
        if(err){
            res.send({success:false,data:err.message});
        }else{
            console.log(result);
            res.send({success:true,data:result});
        }
    });
})

module.exports = router;
