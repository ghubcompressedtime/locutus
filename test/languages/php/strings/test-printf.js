XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var printf = require('/Users/kvz/code/phpjs/src/php/strings/printf.js')

describe('php.strings.printf.js', function () {
  it.skip('should pass example 1', function (done) {
    printf("%01.2f", 123.1)
    var expected = 6
    var result = printf("%01.2f", 123.1)
    expect(result).to.deep.equal(expected)
    done()
  })
})