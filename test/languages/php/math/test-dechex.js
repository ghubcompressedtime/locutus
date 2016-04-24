XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var dechex = require('/Users/kvz/code/phpjs/src/php/math/dechex.js')

describe('php.math.dechex.js', function () {
  it('should pass example 1', function (done) {
    dechex(10)
    var expected = 'a'
    var result = dechex(10)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    dechex(47)
    var expected = '2f'
    var result = dechex(47)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    dechex(-1415723993)
    var expected = 'ab9dc427'
    var result = dechex(-1415723993)
    expect(result).to.deep.equal(expected)
    done()
  })
})