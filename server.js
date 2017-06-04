var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var knex = require('./knex');

app.get('/', function(req,res,next){
  res.send('hello world!');
})

app.listen(port, function(){
  console.log(`listening on port ${port}`);
});
