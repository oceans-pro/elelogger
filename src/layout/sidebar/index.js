/**
 * 侧边栏 - 文件
 * 控制侧边栏，不要出现滚动条
 * 侧边栏很多元素都是通过XHR动态获取的，十分头疼
 */
import reasonableForMobile from '@/layout/sidebar/reasonable-for-mobile'
require('./_sidebar.scss')
require('./_hide.scss')
require('./_replace.scss')
require('./main')
require('./search') // 站内搜索
require('./link') // 随笔档案 + 实用连接
require('./tag') // 我的标签
// p.s. 随笔档案是原常用连接，其实并不常用，随笔档案这个名字其实更复合语境
/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                             bug fix
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
let $sidebar
$sidebar = $('#sideBar')
$sidebar.scrollAlone() // 防止以小带大

/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                 其他
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
let $sidebarMain
$sidebarMain = $('#sideBarMain')
$sidebarMain.append($('#footer')
  .html(`Copyright-2020 <a href="https://home.cnblogs.com/u/oceans/">oceans-pro</a>`))

$('#sidebar_search h3').text('站内搜索')

reasonableForMobile()
