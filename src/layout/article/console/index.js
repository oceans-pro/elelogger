import './_console.scss'

const old = console.log
addConsoleAfterJavascriptDemo()

function addConsoleAfterJavascriptDemo() {
  const $demos = $('code.javascript')
  // that 为 html element
  // index 为当前为第几个代码块，这里代码提示有问题
  $demos.each(function(index, that) {
      console.log(that)
      let js = 'console.log(`js`)'
      const firstLines = $(this).children('.hljs-comment')
      // -- 判断是否有魔法函数//log
      let flag = false
      for (let i = 0; i < firstLines.length; i++) {
        const value = firstLines[i].innerHTML.replace(/ /g, '')
        if (value === '//log') {
          flag = true
          break
        }
      }

      if (flag) {
        $(this).parents('.copyItem').append(`
          <div id="log-${index}"></div>`
        )

        const vueInstance = new Vue({
          name: 'js-log-' + index,
          el: '#log-' + index, // 原ID会消失，需要重新加上ID
          template: `
            <div :id="'log-'+index" class="console">
              <div class="head">输出结果：</div>
              <div class="console-content" v-html="content"></div>
            </div>
          `,
          data: {
            index: index,
            content: 'no-console-statement-placeholder'
          },
          created() {
            this.content = ''
          },
          mounted() {
            addListener()
            const codeWithTags = that.innerHTML
            const reg = /(<span class="hljs-.+?">)|(<\/span>)/g // 匹配所有hljs标签，注意使用非贪婪匹配
            js = codeWithTags.replace(reg, '')
            js = js.replace('&gt;', '>') // todo 目前方法比较low，未找到解决方法
            console.log(js)
            /*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                      执行js中的代码块，也即填充数据
            +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
            // -- 改变console.log
            console.log = value => {
              this.content += getHtmlStrByValue(value)
            }
            eval(js)
            console.log = old
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
 * @return {string} 转换的HTML字符串
 */
function getHtmlStrByValue(value) {
  let result = ''
  if (typeof value === 'object') {
    result += `<pre><div class="obj">${JSON.stringify(value, null, 2)}</div></pre>`
    result += `<div class="hr"></div>`
  }
  if (typeof value === 'number') {
    result += `<div class="num">${value}</div>`
    result += `<div class="hr"></div>`
  }
  if (typeof value === 'string') {
    result += `<div class="str">${value}</div>`
    result += `<div class="hr"></div>`
  }
  return result
}

/**
 *
 * @param {Object}obj
 */
function parseObj(obj) {

}
