var express = require('express');
var router = express.Router();

var conn=require('../mysql/db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/d/w',function(req,res){
    var movies = 'SELECT * FROM movie limit 0,4';
    conn.query(movies,function(err,result){
        if(err){
            return res.send({message:'false'})
        }else{
            return res.send({data:result});
        }
    })
})

module.exports = router;
