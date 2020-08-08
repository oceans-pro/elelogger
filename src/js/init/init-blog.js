// 博文
if ($('#topics').length > 0) {
  //高亮
  // $('pre code')
  //     .each(function(i, block) {
  //       hljs.highlightBlock(block)
  //     })
  //     .each(function() {
  //       const lines = $(this).text().split('\n').length - 1
  //       const $numbering = $('<ul/>').addClass('pre-numbering')
  //       $(this).addClass('has-numbering').parent().append($numbering)
  //       for (let i = 1; i <= lines; i++) {
  //         $numbering.append($('<li/>').attr('data-number', i))
  //       }
  //     })

  // 表格滚动
  $('table').each(function() {
    $(this).css('cssText', 'width:100%!important;display:table;')
    $(this).wrapAll('<div class="tablebox"></div>')
    $('.tablebox').css('overflow', 'auto')
  })

  // 新窗口打开
  $('#cnblogs_post_body a[href^="http"]').each(function() {
    $(this).attr('target', '_blank')
  })

  // fancybox
  $('.cnblogs-markdown img').each(function() {
    const element = document.createElement('a')
    $(element).attr('data-fancybox', 'gallery')
    $(element).attr('href', $(this).attr('src'))
    $(element).attr('data-caption', $(this).attr('alt'))
    $(this).wrap(element)
    if ($(this).attr('alt') !== '') {
      $(this)
          .parent()
          .after('<div class="img-caption">' + $(this).attr('alt') + '</div>')
    }
  })

  // -------------------------------------------------- 代码复制 --------------------------------------------------
  for (let i = 0; i <= $('pre').length; i++) {
    $('.copyItem').css('position', 'relative')
    $('pre')
        .eq(i)
        .wrapAll('<div class="copyItem"></div>')
        .before('<div class="clipboard-button" id="copy_btn_' + i + ' " data-clipboard-target="#copy_target_' + i + '"title="复制"></div>')
        .attr('id', 'copy_target_' + i)
  }

  /*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                   复制
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
  const ClipboardJS = require('clipboard')
  const clipboard = new ClipboardJS('.clipboard-button')
  clipboard.on('success', function(e) {
    window.markdownVue.$notify({
      title: '成功',
      message: '复制成功',
      type: 'success'
    })
    e.clearSelection()
  })
  clipboard.on('error', function(e) {
    window.markdownVue.this.$notify.error({
      title: '错误',
      message: '复制失败，请尝试使用PC端'
    })
    e.clearSelection()
  })

  /*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                   评论区头像
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
  $(document).ajaxComplete(function(event, xhr, option) {
    //评论头像
    if (option.url.indexOf('GetComments') > -1) {
      setTimeout(function() {
        // owoEmoji()
        $.each($('.feedbackItem'), function(index, ele) {
          var self = $(ele)
          var obj = self.find('.blog_comment_body')
          var id = obj.attr('id').split('_')[2]
          var blog = self.find('a[id^="a_comment_author"]')
          var blogUrl = blog.attr('href')
          var imgSrc = $('#comment_' + id + '_avatar').html() || 'http://pic.cnblogs.com/avatar/simple_avatar.gif'
          self.prepend('<a href="' + blogUrl + '"><img src="' + imgSrc + '" style="float:left;" class="comment_avatar"></a')
          $('.feedbackListSubtitle').addClass('feedbackListSubtitle_right')
          $('.feedbackCon').addClass('feedbackCon_right')
        })

        //myscroll();
      }, 300)
    }
  })

  // 引入owo插件
  // window.owoEmoji = function() {
  //   $('.commentbox_footer').before(
  //       '<div class="OwO" onclick="load_face(this)"><div class="OwO-logo"><i class="fa fa-smile-o" aria-hidden="true"></i></div></div>'
  //   )
  // }
  // 表情按钮按下
  // window.load_face = function(b) {
  //   var c = new OwO({
  //     logo: '<i class="fa fa-smile-o" aria-hidden="true"></i>',
  //     container: document.getElementsByClassName('OwO')[0],
  //     target: document.getElementById('tbCommentBody'),
  //     api: 'https://cdn.jsdelivr.net/gh/gshang2018/home/gshang.owo.json',
  //     position: 'up',
  //     width: '100%',
  //     maxHeight: '250px',
  //   })
  //   b.classList.add('OwO-open')
  //   b.onclick = null
  // }
}
//$('link[href^="/skins/"],link[href^="/css/blog-common"]').remove();
$('#mainContent').prepend($('#header')) // 将顶部导航挪到右边那个不起眼的位置
$('#sideBar').append($('#footer'))
// -------------------------------------------------- 顶部 --------------------------------------------------
$('#header').prepend(`
      <div class="hd-menu"><ul>
        <li><a id="sidebar-toggler" href="javascript:sidebarToggle()"></a></li>
      </ul></div>`
)
$('#sidebar-toggler').click(function() {
  $('#main').toggleClass('main-widthout-sidebar')
})
// -------------------------------------------------- 顶部目录 --------------------------------------------------
$('#blog_nav_sitehome').wrap(`
      <el-tooltip class="item" effect="dark" content="返回博客园主页" placement="bottom-start">
      </el-tooltip>
    `)
$('#blog_nav_myhome').wrap(`
      <el-tooltip class="item" effect="dark" content="oceans主页" placement="bottom-start">
      </el-tooltip>
    `)
$('#blog_nav_newpost').wrap(`
      <el-tooltip class="item" effect="dark" content="撰写新博客" placement="bottom-start">
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


// --------------------------------------------------  侧边悬浮按钮 --------------------------------------------------
$('#home').append(`
        <div class="float-btn"><ul>
        <li class="btn-top"><a href="#header"></a></li>
        <li class="btn-fullscreen"><a href="javascript:handleFullScreen();handleWideMode();"></a></li>
        <li class="btn-theme"><a  href="javascript:changeTheme()"></a></li>
        <li class="btn-theme-code"><a href="javascript:changeCodeTheme()"></a></li>
        <li class="btn-main"><a href="javascript:sidebarToggle()"></a></li>
        </ul></div>`
)
/* 滚动隐藏效果 */
let windowTop = 0
$(window).scroll(function() {
  let scrolls = $(this).scrollTop()
  if (scrolls >= windowTop) {
    // 当scrolls>windowTop时，表示页面在向下滑动
    $('.float-btn').addClass('float-btn-hide')
    windowTop = scrolls
  } else {
    $('.float-btn').removeClass('float-btn-hide')
    windowTop = scrolls
  }
})
// 平滑滚动控制
const myscroll = function() {
  $('a[href*=\\#],area[href*=\\#]').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        && location.hostname == this.hostname) {
      var $target = $(this.hash)
      $target = ($target.length && $target) || $('[name=' + this.hash.slice(1) + ']')
      if ($target.length) {
        var targetOffset = $target.offset().top
        $('html,body').animate(
            {
              scrollTop: targetOffset,
            },
            500
        )
        return false
      }
    }
  })
}
myscroll()
