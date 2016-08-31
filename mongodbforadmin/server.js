var express=require('express');
var app=express();
var mongojs=require('mongojs');
var path=require('path');
var bodyparser=require('body-parser');
var db = mongojs('trial', ['SHAHI']);

//var db=mongojs('contactlist',['contactlist']);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

db.on('error', function (err) {
    console.log('database error', err)
});

db.on('connect', function () {
    console.log('database connected')
});

app.use(express.static(__dirname+"/public"));
app.use(bodyparser.json());


app.get('/',function(req,res){


  res.sendFile('user.html', { root: path.join(__dirname, '/public') });


});


app.get('/user/:phonenumber',function(req,res){

console.log(req.params);
console.log(typeof(req.params.phonenumber));


db.SHAHI.find({phonenumber:req.params.phonenumber},function(err,docs){
   console.log(docs.length);
   if(docs.length!=0)
   {

   	//console.log(__dirname);
   console.log(typeof(docs));
   console.log(docs);
   console.log(JSON.stringify(docs.phonenumber));
   	//res.json(docs);



}

});
});
//res.send("hello");

/*res.render('/user',{

name:namedb;
contact:contactdb;



});
*/

/*var textFromDb ="shahi";
app.get('/about', function(req, res) {
  res.render('about', {
    text: textFromDb
  });
});
*/


app.post('/userlist',function(req,res){


console.log(req.body);

db.SHAHI.findOne({name:req.body.name},function(err,docs){
   if(!err)
   {console.log(__dirname);
   res.json(docs);

}

});



});

app.listen(8000);
console.log("SERVER IS RUNNING ON 8000");