// let htmlCodeList = document.getElementsByClassName('html-in-md')
// let cssCodeList = document.getElementsByClassName('css-in-md')
// let jsCodeList = document.getElementsByClassName('js-in-md')
//
//
// addCodeAfterRun(htmlCodeList, 'html')
// addCodeAfterRun(cssCodeList, 'css')
//
// /**
//  * @param {HTMLCollectionOf<Element>} list 要被自动生成展示代码的列表
//  * @param {string} type
//  */
// function addCodeAfterRun(list, type) {
//   for (let i = 0; i < list.length; i++) {
//     $(list).parent().append(`
//       <pre><code id="auto-${type}-code-${i}"></code></pre>
//     `)
//     let codeStr = list[i].innerHTML
//     codeStr = codeStr.replace(/</g, '&lt;')
//     codeStr = codeStr.replace(/>/g, '&gt;')
//     codeStr = codeStr.trimLeft()
//     const code = $(`#auto-${type}-code-${i}`)[0]
//     code.innerHTML = codeStr
//     const oldClass = code.getAttribute('class')
//     code.setAttribute('class', `language-${type} ` + oldClass)
//     // 高亮
//     window.hljs.highlightBlock(code)
//   }
// }
