require('./_nav.scss')
/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                 顶部目录
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
const $header = $('#header')
$('#mainContent').prepend($header) // 将顶部导航挪到右边那个不起眼的位置
$header.prepend(`
      <div class="hd-menu"><ul>
        <li><a id="sidebar-toggler" href="javascript:initOrToggleSidebar()"></a></li>
      </ul></div>`
)
$('#sidebar-toggler').click(function() {
  $('#main').toggleClass('main-widthout-sidebar')
})

$('#blog_nav_sitehome').wrap(`
      <el-tooltip class="item" effect="dark" content="返回" placement="bottom-start">
      </el-tooltip>
    `)
$('#blog_nav_myhome').wrap(`
      <el-tooltip class="item" effect="dark" content="主页" placement="bottom-start">
      </el-tooltip>
    `)
$('#blog_nav_newpost').wrap(`
      <el-tooltip class="item" effect="dark" content="撰写" placement="bottom-start">
      </el-tooltip>
    `)
$('#blog_nav_contact').wrap(`
      <el-tooltip class="item" effect="dark" content="联系" placement="bottom-start">
      </el-tooltip>
    `)
$('#blog_nav_rss').wrap(`
      <el-tooltip class="item" effect="dark" content="订阅" placement="bottom-start">
      </el-tooltip>
    `)
$('#blog_nav_admin').wrap(`
      <el-tooltip class="item" effect="dark" content="设置" placement="bottom-start">
      </el-tooltip>
    `)
new Vue({el: '#navList', name: 'NavRight', template: $('#navList').prop('outerHTML')})
