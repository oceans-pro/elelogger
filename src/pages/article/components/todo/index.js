// 有些文章可能没有完成，或者完成度很低，需要在开头提示读者
import Vue from 'vue'
import $ from 'jquery'

/**
 * 未完成提醒
 * @param{string} el
 * @param{string} text 提示文字
 */
export default function TodoComponent(
  {
    el = '',
    text = '本博文尚未完成，请酌情阅读'
  }) {
  return new Vue({
    el: el,
    data: {
      text: text,
      effect: g.theme,
      $: $
    },
    template: `
      <section>
      <el-alert
          :title="text"
          :effect="effect"
          type="error">
      </el-alert>
      </section>
    `,
    mounted() {
      $(document).on('themeChange', (e, data) => {
        this.effect = data
      })
    }
  })
}
