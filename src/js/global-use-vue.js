// -- 考虑到我们不是任何时候都需要Vue，因此需要先让Markdown主动触发Vue创建
window.useVue = function({created, mounted} = {}) {
  window.markdownVue = new Vue({
    el: '#markdown-vue',
    name: 'MarkdownVue',
    data: {
      isMobile: false,
      markdownData: {},
      window: window,
      codeTheme: window.codeTheme
    },
    created() {
      if (created) {
        created()
      }
    },
    mounted() {
      this.isMobile = window.isMobile()
      if (mounted) {
        mounted()
      }
    },
    methods: {
      $,  // jquery
      markdownAjax(url, method = 'get', data) { // 获取后端数据
        $.ajax({
          url: url,
          method: method,
          data: data,
          success: function(data) {
            console.log('debug: ', data)
            this.markdownData = data
          },
        })
      },
      markdownCallback(cb) {
        cb()
      }
    }
  })
  return markdownVue
}

window.invokeMyFunction = function(cb) {
  const start = new Date().getTime()
  cb()
  const end = new Date().getTime()
  console.log('debug: onload耗时'+(end - start)+'毫米秒')
}
