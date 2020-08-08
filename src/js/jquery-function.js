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
  }
})
