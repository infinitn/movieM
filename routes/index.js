var express = require('express');
var router = express.Router();

var conn=require('../mysql/db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/d/w',function(req,res){
    let movies = `SELECT * FROM movie limit 0,4`;
    conn.query(movies,(err,result)=>{
        if(err){
            return res.send({message:'false'})
        }else{
            return res.send({data:result});
}
})
})

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
