require('./init-app')
import {getAuthInfo} from '@/init/function/auth'

/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                               显示页面
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
$('#home, #page_end_html').show()
$('#loading').hide()


window.g.userPath = window.location.pathname.split('/')[1]
window.fn.getAuthInfo = getAuthInfo

