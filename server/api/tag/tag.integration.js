'use strict';

var app = require('../..');
import request from 'supertest';

var newTag;

describe('Tag API:', function() {

  describe('GET /api/tags', function() {
    var tags;

    beforeEach(function(done) {
      request(app)
        .get('/api/tags')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          tags = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      tags.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/tags', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/tags')
        .send({
          name: 'New Tag',
          info: 'This is the brand new tag!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newTag = res.body;
          done();
        });
    });

    it('should respond with the newly created tag', function() {
      newTag.name.should.equal('New Tag');
      newTag.info.should.equal('This is the brand new tag!!!');
    });

  });

  describe('GET /api/tags/:id', function() {
    var tag;

    beforeEach(function(done) {
      request(app)
        .get('/api/tags/' + newTag._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          tag = res.body;
          done();
        });
    });

    afterEach(function() {
      tag = {};
    });

    it('should respond with the requested tag', function() {
      tag.name.should.equal('New Tag');
      tag.info.should.equal('This is the brand new tag!!!');
    });

  });

  describe('PUT /api/tags/:id', function() {
    var updatedTag;

    beforeEach(function(done) {
      request(app)
        .put('/api/tags/' + newTag._id)
        .send({
          name: 'Updated Tag',
          info: 'This is the updated tag!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedTag = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTag = {};
    });

    it('should respond with the updated tag', function() {
      updatedTag.name.should.equal('Updated Tag');
      updatedTag.info.should.equal('This is the updated tag!!!');
    });

  });

  describe('DELETE /api/tags/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/tags/' + newTag._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when tag does not exist', function(done) {
      request(app)
        .delete('/api/tags/' + newTag._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
