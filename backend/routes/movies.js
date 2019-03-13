var express = require('express');
var router = express.Router();
var movies = require('../movies.json');

router.get('/',function(req,res){
  console.log('--movie index--');
  res.send(movies);
});

router.get('/:id', function(req,res){
  console.log('--movie show--');
  var id = req.params.id;
  var movie = movies.filter(function(movie){
    return movie.id == id;
  });
  console.log(movie);
  res.send(movie);
});

module.exports = router;
