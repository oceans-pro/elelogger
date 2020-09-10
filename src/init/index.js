import $ from 'jquery'
import {getAuthInfo} from '@/init/function/auth'

$('#home, #page_end_html').show()
$('#loading').hide()
require('./init-app')

/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                               显示页面
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/

window.g.userPath = window.location.pathname.split('/')[1]
window.fn.getAuthInfo = getAuthInfo

