var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var knex = require('./knex');


var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

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

app.post('/', function(req,res,next){
  knex('hero')
  .insert(req.body, '*' )
  .then(function(data){
    res.send(data);
  })
})

app.patch('/:id', function(req,res,next){
  knex('hero')
  .where('id', req.params.id)
  .update(req.body, '*')
  .then(function(data){
    res.send(data);
  })
})

app.delete('/:id', function(req,res,next){
  knex('hero')
  .where('id', req.params.id)
  .del()
  .then(function(data){
    res.send(`${data} record(s) deleted`);
  })
})

app.listen(port, function(){
  console.log(`listening on port ${port}`);
});
