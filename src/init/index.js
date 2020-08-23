require('./init-app')
import {getAuthInfo} from '@/init/function/auth'

window.userPath = null
window.g.isAuthenticated = null
window.g.isBlogOwner = null
window.userPath = window.location.pathname.split('/')[1]

window.g.isAuthenticated = getAuthInfo().isAuthenticated
window.g.isBlogOwner = getAuthInfo().isBlogOwner


/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                               显示页面
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
$('#home, #page_end_html').show()
$('#loading').hide()
