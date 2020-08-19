require('./init-app')
require('./init-remove')
require('./init-blog')
require('./init-tag-h')
require('./fix-problem')
//
// String.prototype.trim = function(char, type) {
//   if (char) {
//     if (type === 'left') {
//       return this.replace(new RegExp('^\\' + char + '+', 'g'), '')
//     } else if (type === 'right') {
//       return this.replace(new RegExp('\\' + char + '+$', 'g'), '')
//     }
//     return this.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '')
//   }
//   return this.replace(/^\s+|\s+$/g, '')
// }
