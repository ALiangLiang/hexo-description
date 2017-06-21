/* global hexo */
var htmlToText = require('html-to-text')

hexo.extend.filter.register('after_post_render', function(data) {
  if (!data.description && data.excerpt) {
    // Coz data.excerpt is HTML. But we only need pure text.
    var excerpt = data.excerpt
    var description = htmlToText.fromString(excerpt)
    data.description = description
  }
}, 20 /* default priority is 10, some excerpt plugin is use default value. */ )
