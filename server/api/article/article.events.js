/**
 * Article model events
 */

'use strict';

import {EventEmitter} from 'events';
var Article = require('./article.model');
var ArticleEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ArticleEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Article.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ArticleEvents.emit(event + ':' + doc._id, doc);
    ArticleEvents.emit(event, doc);
  }
}

export default ArticleEvents;
