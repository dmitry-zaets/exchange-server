var should = require('should');
var github = require('../src/github/');

describe('10', function(){
  it('should be 10', function(){
    should(github.getUserRepositories).be.Function();
  });
});