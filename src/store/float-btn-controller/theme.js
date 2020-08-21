/**
 * 初始化/切换主题
 * 注意：尽量不要在该函数中加入过多代码逻辑，而是采用
 * 1. :root[theme=dark]
 * 2. 基于document的事件监听
 * @param {number} type 0 代表初始化主题
 */
export default function initOrToggleTheme(type) {
  const theme = $.cookie('theme')

  // -- init
  if (type === 0) {
    if (theme === 'light') {
      makeLight()
    }
    if (theme === 'dark') {
      makeDark()
    }
    makeLight() // cookie中没有
    return
  }

  // -- change
  if ($.cookie('theme') === 'light') {
    saveCookie('dark')
    makeDark()
    return
  }
  if ($.cookie('theme') === 'dark') { // 默认
    saveCookie('light')
    makeLight()
    return
  }
  saveCookie('light')
  makeLight()

  function makeLight() {
    document.documentElement.removeAttribute('theme')
    $(document).trigger('themeChange', 'light')
    $('.my-el-card').css('box-shadow', '0 2px 12px 0 rgba(0,0,0,.1)')
  }

  function makeDark() {
    document.documentElement.setAttribute('theme', 'dark')
    $(document).trigger('themeChange', 'dark')
    $('.my-el-card').css('box-shadow', '')
  }

  function saveCookie(theme) {
    $.cookie('theme', theme, {
      expires: 30,
      path: '/',
      domain: 'cnblogs.com',
    })
  }
}
