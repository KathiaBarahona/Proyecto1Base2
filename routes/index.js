var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
require('../models/Questions');

mongoose.connect('mongodb://localhost/quizes');
var Question = mongoose.model("Question");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/questions', function(req, res, next) {
    Question.find(function(err, questions) {
        if (err) {
            return next(err);
        }

        res.json(questions);
    });
}); 
router.post('/createQuestion', function(req, res, next) {
    var question = new Question(req.body);
    question.save(function(err, question) {
   

        if (err) {
            return next(err); }
        if (!question) {
            return next(new Error("Error al crear pregunta")) }
       
        res.send(question);
    });
}); 
module.exports = router;
