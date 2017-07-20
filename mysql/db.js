var mysql=require('mysql');

var conn=mysql.createConnection({
    host:'10.0.44.252',
    user:'kkmovie',
    password:'123',
    database:'kmovie'
})

conn.connect(function(err){
    if (err) {
        // throw err;
        console.log('链接失败！');
    }else{
        console.log('链接成功！');

}
});

module.exports=conn;

