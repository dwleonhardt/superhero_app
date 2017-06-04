var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var knex = require('./knex');

app.get('/', function(req,res,next){
  knex('hero')
  .then(function(data){
    res.send(data);
  })
})

app.get('/:id', function(req,res,next){
  knex('hero')
  .where('id', req.params.id)
  .then(function(data){
    res.send(data);
  })
})

app.listen(port, function(){
  console.log(`listening on port ${port}`);
});
