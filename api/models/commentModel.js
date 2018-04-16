'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CommentSchema = new Schema({
  author: String,
  body: String,
  Created_date: {
    type: Date,
    default: Date.now
  },
  articleId: String,
  fatherComment: String
});

module.exports = mongoose.model('Comments', CommentSchema);