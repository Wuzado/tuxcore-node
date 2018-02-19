'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export garlicore-lib', function() {
    var garlicore = require('../');
    should.exist(garlicore.lib);
    should.exist(garlicore.lib.Transaction);
    should.exist(garlicore.lib.Block);
  });
});
