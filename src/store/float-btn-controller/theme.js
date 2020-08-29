/**
 * 初始化/切换主题
 * 注意：尽量不要在该函数中加入过多代码逻辑，而是采用
 * 1. :root[theme=dark]
 * 2. 基于document的事件监听
 * 3. 除非监听太晚了，你实在捕捉不到事件...
 * @param {boolean} isInit
 */
export default function initOrToggleTheme(isInit) {
  window.g = window.g || {}
  const theme = $.cookie('theme')

  // -- init
  if (isInit) {
    if (theme === 'light') {
      makeLight()
      return
    }
    if (theme === 'dark') {
      makeDark()
      return
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
    saveEventName()
    $('.my-el-card').css('box-shadow', '0 2px 12px 0 rgba(0,0,0,.1)')
    window.g.theme = 'light'
  }


  function makeDark() {
    document.documentElement.setAttribute('theme', 'dark')
    $(document).trigger('themeChange', 'dark')
    saveEventName()
    window.g.theme = 'dark'
    $('.my-el-card').css('box-shadow', '')
  }

  function saveCookie(theme) {
    $.cookie('theme', theme, {
      expires: 30,
      path: '/',
      domain: 'cnblogs.com',
    })
  }

  function saveEventName() {
    window.g.events = window.g.events || []
    window.g.events.push('themeChange')
  }
}
