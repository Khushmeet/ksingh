/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/articles              ->  index
 * POST    /api/articles              ->  create
 * GET     /api/articles/:id          ->  show
 * PUT     /api/articles/:id          ->  update
 * DELETE  /api/articles/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Article from './article.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Articles
export function index(req, res) {
  Article.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Article from the DB
export function show(req, res) {
    Article.findByIdAsync(req.params.id)
      .then(handleEntityNotFound(res))
      .then(respondWithResult(res))
      .catch(handleError(res));
}

//Gets a list of Articles from the DB for given query
export function find(req,res){
  Article.findAsync({tags:req.params.tag})
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Article in the DB
export function create(req, res) {
  Article.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Article in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Article.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Article from the DB
export function destroy(req, res) {
  Article.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
