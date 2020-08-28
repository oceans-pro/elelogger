export default function alert(value, cb = null) {
  if (!window.ele) {
    console.error('ele未初始化完成')
  }

  // fix element-ui bug
  $('body').css('overflow', 'auto')
  window.ele.$alert(value, '提示', {
    confirmButtonText: '确定',
    callback: action => {
      if (cb) {
        cb()
      }
    }
  })
}
