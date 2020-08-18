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
    window.eleNotice.$notify({
      title: '成功',
      message: '复制成功',
      type: 'success',
      duration:'500',
    })
    e.clearSelection()
  })
  clipboard.on('error', function(e) {
    window.eleNotice.this.$notify.error({
      title: '错误',
      message: '复制失败，请尝试使用PC端'
    })
    e.clearSelection()
  })
}


/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                 平滑滚动
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
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
