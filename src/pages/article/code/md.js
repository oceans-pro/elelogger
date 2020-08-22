highlightMd()

/**
 * 让highlight.js支持.md语法！！！
 */
function highlightMd() {
  let $md = $('code.markdown')
  if ($md.length === 0) {
    return
  }
  $md.each(function() {
    const md = $(this)[0]
    if (md.innerHTML.indexOf('```es6') > 0) {
      const $md = $(md)
      const html = $md.html()
      // -------------------------------------------------- 先处理JS --------------------------------------------------
      const js = html
        .replace(/(<span class="hljs-code">```es6)|(```<\/span>)|(```es6)|(```)/g, '')
        .replace(/&lt;/gm, '<')
        .replace(/&gt;/gm, '>')
        .trim()
      const jsHighlightStr = window.hljs.highlight('javascript', js).value

      // -- 是否需要处理HTML字符串
      let temp = jsHighlightStr
        .toString()
        .replace(/&lt;/gm, '<')
        .replace(/&gt;/gm, '>')
        .trim() // 高亮JS => 处理 => temp
      const htmlReg = /<section>[\d\D]{1,}<\/section>/mg
      const regResult = htmlReg.exec(temp)

      if (!regResult) {
        let result = '```es6\r\n' + jsHighlightStr + '\r\n```'
        $md.html(result)
      }
      // --------------------------------------------------
      //                                        处理HTML（在字符串中也给他显示出来）
      // --------------------------------------------------
      if (regResult) {
        const htmlStr = regResult[0]
        let result = temp.replace(htmlReg, function(htmlStr) {
          return window.hljs.highlight('html', htmlStr).value
        })
        result = '```es6\r\n' + result + '\r\n```'
        $md.html(result)
      }
    }
  })
}
