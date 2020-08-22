/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
 注意：
 import和require混用时
 要注意 import会被提升到前面
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
// css
import './scss'
// js
require('./components')
require('./header')
require('./post')
require('./code')
require('./console')
require('./buttom-tag')
require('./comment')
require('./share')


