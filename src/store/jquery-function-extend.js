/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                        扩展jQuery实例函数
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
window.jQuery.fn.extend({
  /**
   * 交换任意两个jQuery对象的位置
   * @param another
   */
  swap: function(another) {
    const me = this
    const cloneMe = me.clone()
    const temp = $('<span/>')
    another.before(temp)
    me.replaceWith(another)
    temp.replaceWith(cloneMe)
    return this
  },
  /**
   * 子元素滚动，父元素不滚动
   * @link https://www.zhangxinxu.com/wordpress/2015/12/element-scroll-prevent-parent-element-scroll-js/comment-page-1/#comment-405824
   */
  scrollAlone: function() {
    return $(this).each(function() {
      var eventType = 'mousewheel'
      // 火狐是DOMMouseScroll事件
      if (document.mozHidden !== undefined) {
        eventType = 'DOMMouseScroll'
      }
      $(this).on(eventType, function(event) {
        // 一些数据
        const scrollTop = this.scrollTop,
            scrollHeight = this.scrollHeight,
            height = this.clientHeight

        const delta = (event.originalEvent.wheelDelta) ? event.originalEvent.wheelDelta : -(event.originalEvent.detail || 0)

        if ((delta > 0 && scrollTop <= delta) || (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)) {
          // IE浏览器下滚动会跨越边界直接影响父级滚动，因此，临界时候手动边界滚动定位
          this.scrollTop = delta > 0 ? 0 : scrollHeight
          // 向上滚 || 向下滚
          event.preventDefault()
        }
      })
    })
  },
})
