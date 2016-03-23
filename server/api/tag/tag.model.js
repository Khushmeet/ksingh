'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var TagSchema = new mongoose.Schema({
  tags:[String]
});

export default mongoose.model('Tag', TagSchema);
