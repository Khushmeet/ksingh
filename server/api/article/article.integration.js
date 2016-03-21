'use strict';

var app = require('../..');
import Article from './article.model';
import request from 'supertest';

var newArticle;

describe('Article API:', function() {

  describe('GET /api/articles', function() {
    var articles;

    beforeEach(function(done) {
      request(app)
        .get('/api/articles')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          articles = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      articles.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/articles', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/articles')
        .send({
          title:'Test article',
          author:'khushmeet singh',
          date:'12 march 2016',
          alt:'wel wel',
          intro:'this is intro',
          content:'this is content',
          tags:['tag1','tag2']
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newArticle = res.body;
          done();
        });
    });

    it('should respond with the newly created article', function() {
      newArticle.title.should.equal('Test article');
      newArticle.author.should.equal('khushmeet singh');
      newArticle.alt.should.equal('wel wel');
    });

  });

  describe('GET /api/articles/:id', function() {
    var article;

    beforeEach(function(done) {
      request(app)
        .get('/api/articles/' + newArticle._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          article = res.body;
          done();
        });
    });

    afterEach(function() {
      article = {};
    });

    it('should respond with the requested article', function() {
      article.title.should.equal('Test article');
      article.author.should.equal('khushmeet singh');
      article.alt.should.equal('wel wel');
    });

  });

  describe('PUT /api/articles/:id', function() {
    var updatedArticle;

    beforeEach(function(done) {
      request(app)
        .put('/api/articles/' + newArticle._id)
        .send({
          title:'Test article 2',
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedArticle = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedArticle = {};
    });

    it('should respond with the updated article', function() {
      updatedArticle.title.should.equal('Test article 2');
      updatedArticle.author.should.equal('khushmeet singh');
      updatedArticle.alt.should.equal('wel wel');
    });

  });

  describe('DELETE /api/articles/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/articles/' + newArticle._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when article does not exist', function(done) {
      request(app)
        .delete('/api/articles/' + newArticle._id)
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
