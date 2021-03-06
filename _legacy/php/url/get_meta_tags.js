module.exports = function get_meta_tags (file) { // eslint-disable-line camelcase
  //  discuss at: http://locutusjs.io/php/get_meta_tags/
  // original by: Brett Zamir (http://brett-zamir.me)
  //        note: This function uses XmlHttpRequest and cannot retrieve resource from different domain.
  //        note: Synchronous so may lock up browser, mainly here for study purposes.
  //        test: skip-all
  //   example 1: get_meta_tags('http://kvz.io/pj_test_supportfile_2.htm')
  //   returns 1: {description: 'a php manual', author: 'name', keywords: 'php documentation', 'geo_position': '49.33;-86.59'}

  var file_get_contents = require('../filesystem/file_get_contents')
  var fulltxt = ''

  if (false) {
    // Use this for testing instead of the line above:
    fulltxt = '<meta name="author" content="name">' + '<meta name="keywords" content="php documentation">' +
      '<meta name="DESCRIPTION" content="a php manual">' + '<meta name="geo.position" content="49.33;-86.59">' +
      '</head>'
  } else {
    fulltxt = file_get_contents(file)
      .match(/^[\s\S]*<\/head>/i) // We have to disallow some character, so we choose a Unicode non-character
  }

  var patt = /<meta[^>]*?>/gim
  var patt1 = /<meta\s+.*?name\s*=\s*(['"]?)(.*?)\1\s+.*?content\s*=\s*(['"]?)(.*?)\3/gim
  var patt2 = /<meta\s+.*?content\s*=\s*(['"?])(.*?)\1\s+.*?name\s*=\s*(['"]?)(.*?)\3/gim
  var txt, match, name, arr = {}

  while ((txt = patt.exec(fulltxt)) !== null) {
    while ((match = patt1.exec(txt)) !== null) {
      name = match[2].replace(/\W/g, '_')
        .toLowerCase()
      arr[name] = match[4]
    }
    while ((match = patt2.exec(txt)) !== null) {
      name = match[4].replace(/\W/g, '_')
        .toLowerCase()
      arr[name] = match[2]
    }
  }
  return arr
}
