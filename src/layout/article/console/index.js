import './_console.scss'

window.old = window.old || {}
window.old.logFn = console.log

addConsoleAfterJavascriptDemo()


/**
 * 在Markdown中运行脚本，为了有高亮和提示效果，这里用了es6
 */
// $('code.language-es6').each(function() {
//   window.eval($(this).text())
//   $(this).parent().remove()
// })


function addConsoleAfterJavascriptDemo() {
  const $demos = $('code.javascript, code.language-es6')
  // that 为 html element
  // index 为当前为第几个代码块，这里代码提示有问题
  $demos.each(function(index, that) {
      /*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                               静默执行
      +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
      if ($(this).attr('class').indexOf('es6') > 0) {
        window.eval($(this).text())
        $(this).parent().remove()
      }

      // console.log(that) // jq对象
      let js = 'console.log(`js`)'
      const firstLines = $(this).children('.hljs-comment')
      // -- 判断是否有魔法函数//log //log-native
      let flag = 0
      for (let i = 0; i < firstLines.length; i++) {
        const value = firstLines[i].innerHTML.replace(/ /g, '')
        if (value === '//log') { // 无法正常使用原生的console.log
          flag = 1
          break
        }
        if (value === '//log-native') { // 可以使用原生的console.log，但有很多限制
          flag = 2
          break
        }
      }

      if (flag === 1 || flag === 2) {
        $(this).parents('.copyItem').append(`
          <div id="log-${index}"></div>`
        )

        const vue = new Vue({
          name: 'js-log-' + index,
          el: '#log-' + index, // 原ID会消失，需要重新加上ID
          template: `
            <section>
              <div class="head"><i class="el-icon-sort"></i></div>
              <div :id="'log-'+index" class="console">
                <div class="console-content" v-html="content"></div>
              </div>
            </section>
          `,
          data: {
            index: index,
            content: 'no-console-statement-placeholder'
          },
          created() {
            this.hasData = false
            this.timer = timer(this)
          },
          mounted() {
            addListener()
            const codeWithTags = that.innerHTML
            const reg = /(<span class="hljs-.+?">)|(<\/span>)/g // 匹配所有hljs标签，注意使用非贪婪匹配
            js = codeWithTags.replace(reg, '')
            js = js.replace('&gt;', '>')
            /*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                      执行js中的代码块，也即填充数据
            +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
            // -- 改变console.log
            console.log = value => {
              if (!this.hasData) { // 首次
                this.content = '' // 清空占位loading
                this.hasData = true
                clearInterval(this.timer)
              }
              this.content += getHtmlStrByValue(value)
            }
            if (flag === 2) {
              // -- 预处理js，在最后一个console.log语句恢复原生console
              // 缺点：每个异步只能单独另起一个```js，且放在最后
              const regConsole = /console.log\([\d\D]*?\)/gm
              const arr = js.match(regConsole)
              if (arr) {
                const lastConsoleLog = arr[arr.length - 1]
                js = js.replace(lastConsoleLog, lastConsoleLog + ';\r\n console.log=window.old.logFn;')
              }
            }
            window.old.logFn(js)
            eval(js)
            // -- 下面这种形式不能处理异步
            // console.log = window.old.logFn
          },
        })
      }
    }
  )
}

/**
 * 点击后边框高亮
 */
function addListener() {
  $('.console-content').click(function(event) {
    event.stopPropagation()
    $(this).parents('.console').addClass('border-highlight')
  })
  $(document).click(function(event) {
    $('.console').removeClass('border-highlight')
  })
}

/**
 * @param value 要输入的值
 * @return {string} 转换的HTML字符串 | 或不转换
 */
function getHtmlStrByValue(value) {
  let result = ''
  if (value === undefined) {
    result += `<div class="null">undefined</div>`
    result += `<div class="hr"></div>`
    return result
  }
  if (value === null) {
    result += `<div class="null">null</div>`
    result += `<div class="hr"></div>`
    return result
  }

  if (typeof value === 'object') {
    if (value.toString().indexOf('vue-devtools') > 0) {
      window.old.logFn(value)
      return
    }
    const pureJson = JSON.stringify(value, null, 2)
    const colorfulJson = highLightJson(pureJson)
    console.log(colorfulJson)
    result += `<pre><div class="obj">${colorfulJson}</div></pre>`
    result += `<div class="hr"></div>`
    return result
  }
  if (typeof value === 'number' || typeof value === 'boolean') {
    result += `<div class="num">${value}</div>`
    result += `<div class="hr"></div>`
    return result
  }
  if (typeof value === 'string') {
    result += `<div class="str">${value}</div>`
    result += `<div class="hr"></div>`
    return result
  }
}

/**
 *
 * @param {string} str
 * @returns {string}
 */
function highLightJson(str) {
  return window.hljs.highlight('json', str).value
}


/**
 * 定期改变vue实例中数据的函数
 */
function timer(vue) {
  const arr = ['loading', 'loading.', 'loading..', 'loading...']
  let index = 0
  vue.content = `<div class="loading">${arr[0]}</div>`
  return setInterval(function() {
    if (index === arr.length - 1) index = 0
    index++
    vue.content = `<div class="loading">${arr[index]}</div>`
  }, 500)
}
