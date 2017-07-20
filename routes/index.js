var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var conn = mysql.createConnection({
    host:'10.0.44.252',
    user:'kkmovie',
    password:'123',
    database:'kmovie'
})
conn.connect(function(err){
    if (err) {
        throw err;
    }else{
        console.log('连接成功');

    }
})

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

module.exports = router;
