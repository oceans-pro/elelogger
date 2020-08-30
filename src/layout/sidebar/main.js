// -------------------------------------------------- 侧边目录 --------------------------------------------------
if ($('#post_detail').length > 0) {
  // 先获取第一个h标签, 之后循环时作为上一个h标签
  let $ph = $('#cnblogs_post_body :header:eq(0)')
  if ($ph.length > 0) {
    // 设置层级为1
    $ph.attr('offset', '1')
    // 添加导航目录的内容
    // $('#leftcontentcontainer').prepend(`
    //   <div title="placeholder-for-side-choose" style="height: 55px;"></div>
    // `)
    //
    $('#sideBar')
      .prepend(`
          <div id="sideBarOutline" class="sidebar-block">
            <ul class="nav"></ul>
          </div>
        `)
      .prepend(`
          <div class="side-choose">
            <a id="sidebar_files" href="javascript:showSide()">文件</a>
            <a id="sidebar_outline" href="javascript:showContent()">大纲</a>
          </div>
          <div title="placeholder-for-side-choose" style="height: 52px;"></div>
        `)
    $('#sideBarMain').hide()
    showContent()
    //取当前边栏的宽度
    //$('#sideBarOutline').css('width', ($('#sideBarMain').width()) + 'px');
    //让导航目录停留在页面顶端
    //  $('#sideBarOutline').stickUp();

    // 遍历文章里每个h标签
    $('#cnblogs_post_body :header')
      .filter(function() {
        return ['H2', 'H3'].includes(this.tagName)
      })
      .each(function(i) {
        // jquery的each方法 https://www.runoob.com/jquery/traversing-each.html
        // this === $(this)[0]
        let $h = $(this)
        // 设置h标签的id, 编号从0开始
        $h.attr('id', 'scroller-' + i)
        // 比上一个h标签层级小, 级数加1
        if ($h[0].tagName > $ph[0].tagName) {
          $h.attr('offset', parseInt($ph.attr('offset')) + 1)
        } // 比上一个h标签层级大, 级数减1
        else if ($h[0].tagName < $ph[0].tagName) {
          let h = parseInt($h[0].tagName.substring(1))
          let ph = parseInt($ph[0].tagName.substring(1))

          let offset = parseInt($ph.attr('offset')) - (ph - h)
          if (offset < 1) {
            offset = 1
          }
          $h.attr('offset', offset)
        } //和上一个h标签层级相等时, 级数不变
        else {
          $h.attr('offset', $ph.attr('offset'))
        }

        // 添加h标签的目录内容
        $('#sideBarOutline ul').append(
          '<li class="scroller-offset' + $h.attr('offset') + '"><a href="#scroller-' + i + '">' + $h.text() + '</a></li>'
        )
        //最后设置自己为上一个h标签
        $ph = $h
      })
      .each(function() {
        const id = $(this).attr('id')
        $(this).prepend(`
            <a href="#${id}" aria-hidden="true" class="header-anchor">#</a>
          `)
      })

    // todo 这里可以进一步优化，根据距离计算速度
    window.targetOffset = 0
    $('a[href^="#scroller"]').click(function() {
      // 判断是否为锚点，增强了鲁棒性
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
        && location.hostname === this.hostname) {
        let $target = $(this.hash)
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']')
        if ($target.length) {
          let targetOffset = $target.offset().top
          let speed = 500
          if (Math.abs(targetOffset - window.targetOffset) < 300) {
            speed = 100
          }
          $('html,body').animate({scrollTop: targetOffset}, speed)
          window.targetOffset = targetOffset
          return false
        }
      }
    })

    //开启滚动监听, 监听所有在.nav类下的li
    $('body').scrollspy()


    /* 当前目录激活监听 */
    $(window).scroll(function() {
      const now = $('#sideBarOutline').find('.active')
      const prevNum = now.prevAll().length + 1
      const basicHeight = now.outerHeight()
      $('#sideBar').scrollTop(prevNum * basicHeight)
    })
  }
}
