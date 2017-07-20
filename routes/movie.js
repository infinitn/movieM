var express = require('express');
var router = express.Router();
var conn=require('../mysql/db')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


router.post('/a',function(req,res){
    var tag=req.body.tag.split(' / ');
    console.log(req.body);
    var sql='INSERT INTO movie SET ?';
    var sqlcategory='SELECT type FROM category';
    var sqlcategory_id='SELECT id FROM category';
    var sqlcate_movie='INSERT INTO cate_movie(c_id,m_id) VALUES (?,?)';
    conn.query(sql,req.body.movie,function(err,results){

        if (err){
            return res.json({success:false,data:results});
        }
        if (results.affectedRows>0){
            var m_id=results.insertId;

            for (var i in tag){

                for(var j in sqlcategory){
                    // console.log(sqlcategory[j]);
                    if(tag[i]==sqlcategory[j]){
                        console.log(1234);
                        var c_id=sqlcategory_id[j]
                        conn.query(sqlcate_movie,(c_id,m_id));
                    }
                }
            }
            return res.json({success:true})
        }
        res.json({success:false,data:'插入失败'})
    });


    var sql='INSERT INTO actores(name,image,am_t) VALUES (?,?,?)';
    var actor=req.body.actores;
    console.log(actor);
    for (var i in actor){
        console.log(actor[i]);
        conn.query(sql,[actor[i].name,actor[i].image,req.body.movie.title]);
    }



})
module.exports = router;
