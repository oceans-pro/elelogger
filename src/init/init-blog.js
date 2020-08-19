// 博文
if ($('#topics').length > 0) {
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
