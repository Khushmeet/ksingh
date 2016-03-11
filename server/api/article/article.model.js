'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var Schema = mongoose.Schema;

var ArticleSchema = new mongoose.Schema({
  title: String,
  author: String,
  date: Date,
  imageId:Schema.ObjectId,
  intro:String,
  content:String,
  tags:[String]
});

export default mongoose.model('Article', ArticleSchema);
