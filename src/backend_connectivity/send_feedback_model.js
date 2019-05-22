const mongoose = require('mongoose');

const FeedbackSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    message: String
});

module.exports = mongoose.model('Feedback', FeedbackSchema);