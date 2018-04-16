'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
  title: {
    type: String,
    required: 'Kindly enter the title of the article'
  },
  body: String,
  Created_date: {
    type: Date,
    default: Date.now
  },
  tags: {
    type: [String],
    default: []
  },
  nbComments: {
    type: Number,
    default: 0,
    min: 0
  }
});

module.exports = mongoose.model('Articles', ArticleSchema);
