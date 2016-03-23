'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var tagCtrlStub = {
  index: 'tagCtrl.index',
  show: 'tagCtrl.show',
  create: 'tagCtrl.create',
  update: 'tagCtrl.update',
  destroy: 'tagCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var tagIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './tag.controller': tagCtrlStub
});

describe('Tag API Router:', function() {

  it('should return an express router instance', function() {
    tagIndex.should.equal(routerStub);
  });

  describe('GET /api/tags', function() {

    it('should route to tag.controller.index', function() {
      routerStub.get
        .withArgs('/', 'tagCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/tags/:id', function() {

    it('should route to tag.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'tagCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/tags', function() {

    it('should route to tag.controller.create', function() {
      routerStub.post
        .withArgs('/', 'tagCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/tags/:id', function() {

    it('should route to tag.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'tagCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/tags/:id', function() {

    it('should route to tag.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'tagCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/tags/:id', function() {

    it('should route to tag.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'tagCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
