var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
    question: String,
    type: Number,
    answers: [String],
    correctAnswer: Number
});

mongoose.model('Question', QuestionSchema);
