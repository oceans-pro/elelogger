/**
 * code.language-js用于 代码显示
 * code.language-es6用于 静默执行
 * code.language-js 也可执行，但是非静默的
 */
import {deHighlight, evalSafely} from '@/pages/article/console/util'

export default function addConsoleAfterJavascriptDemo() {
  const $demos = $('code.language-js, code.language-es6')
  // that 为 dom对象
  // index 为当前为第几个代码块
  $demos.each(function(index, that) {
      /*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                               静默执行
      +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
      if ($(this).attr('class').indexOf('es6') > 0) {
        evalSafely($(this).text())
        $(this).parent().remove()
      }
      /*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                               非静默执行
      +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
      let js
      const comments = $(this).children('.hljs-comment')
      // -- 判断是否有魔法函数//log //log-async
      let flag
      for (let i = 0; i < comments.length; i++) {
        const value = comments[i].innerHTML.replace(/ /g, '')
        if (value === '//log') {
          flag = 'sync'
          break
        }
        if (value === '//log-async') {
          flag = 'async'
          break
        }
      }
      /*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                  仅展示代码
      +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
      if (!flag) {
        return // 跳出本次循环
      }
      /*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                               展示代码+执行+输出
      +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
      $(this).parents('.copyItem').append(`
          <div id="js-${index}"></div>` // 设置logger的位置
      )
      const codeWithTags = that.innerHTML
      // 删掉多余的外层hljs标签 注意使用非贪婪匹配
      js = deHighlight(codeWithTags)
      /*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                 同步代码
      +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
      if (flag === 'sync') {
        const logger = new Logger(index, false)
        console.log = value => {
          logger.content += fn.getHtmlStrByValue(value)
        }
        js = `
          try {
            ${js}
          } catch (e) {
            console.log('错_错-错[' + e.name + ': ' + e.message + ']')
            fn.error(e.stack)
          }`
        evalSafely(js)

        console.log = window.fn.log
        console.error = window.fn.error
        listenLoggerClick()
        return
      }

      if (flag === 'async') {
        const logger = new Logger(index, true)
        window.g = window.g || {}
        window.g.loggers = window.g.loggers || []
        window.g.loggers[index] = logger
        js = js.replace(/\/\/ log-async/gm, `
            console.log = value => {
            clearInterval(g.loggers[${index}].timer)
            g.loggers[${index}].tip = ''
            g.loggers[${index}].content += fn.getHtmlStrByValue(value)
          }
        `)
        evalSafely(js)
        listenLoggerClick()
      }
    }
  )


  /**
   * @param index 这是第几个JS/ES6代码块，作为唯一标识
   * @param isAsync{boolean} 若flag，则代表未异步
   * @returns {Vue}
   */
  function Logger(index, isAsync) {
    return new Vue({
      name: 'logger',
      el: '#js-' + index, // 原ID会消失，需要重新加上ID
      template: `
        <section>
          <div class="head"><i class="el-icon-sort"></i></div>
          <div :id="'log-'+index" class="console">
            <div class="console-content" v-html="tip"></div>
            <div class="console-content" v-html="content"></div>
          </div>
        </section>`,
      data: {
        index: index,
        content: '',
        tip: ''
      },
      created() {
        this.hasData = false
        if (isAsync) {
          this.timer = timer(this)
        }
      },
    })
  }


  /**
   * 点击logger，框高亮
   */
  function listenLoggerClick() {
    $('.console-content').click(function(event) {
      event.stopPropagation()
      $(this).parents('.console').addClass('border-highlight')
    })
    $(document).click(function(event) {
      $('.console').removeClass('border-highlight')
    })
  }


  /**
   * 定期改变vue实例中数据的函数
   */
  function timer(vue) {
    const arr = ['waiting', 'waiting.', 'waiting..', 'waiting...', 'waiting....', 'waiting.....', 'waiting......']
    let index = 0
    vue.tip = `<div class="loading">${arr[0]}</div>`
    return setInterval(function() {
      if (index === arr.length - 1) index = 0
      index++
      vue.tip = `<div class="loading">${arr[index]}</div>`
    }, 500)
  }

}
