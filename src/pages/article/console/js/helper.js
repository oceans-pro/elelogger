/**
 * @param index 这是第几个JS/ES6代码块，作为唯一标识
 * @param isAsync{boolean} 若flag，则代表未异步
 * @returns {Vue}
 */
export function Logger(index, isAsync) {
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
export function listenLoggerClick() {
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
export function timer(vue) {
  const arr = ['waiting', 'waiting.', 'waiting..', 'waiting...', 'waiting....', 'waiting.....', 'waiting......']
  let index = 0
  vue.tip = `<div class="loading">${arr[0]}</div>`
  return setInterval(function() {
    if (index === arr.length - 1) index = 0
    index++
    vue.tip = `<div class="loading">${arr[index]}</div>`
  }, 500)
}
