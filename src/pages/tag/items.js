/**
 *
 * @param{string} el 指定一个大范围 上面还是下面，比如
 * ('#up-tag-area')
 * ('#down-tag-area')
 */
export default function VueInstanceWithSortableList(el) {
  // --初始化
  let $which = $(el)
  let $whichTds = $which.find('td')
  $which.find('table').remove()
  let items = []
  $whichTds.each(function() {
    const inner = $(this).html()
    items.push(inner)
  })
  return new Vue({
    el: el + ' ' + '#taglist',
    name: el + ' ' + '#taglist',
    template: `
      <section>
        <el-button :type="type"
                   plain
                   @click="handleClick"
                   size="small"
                   v-for="item in list"
                   v-html="item"
                   class="item">
        </el-button>
      </section>
    `,
    data: {
      type: 'primary',
      list: items,
      status: 'nameDown',
      $: $,
    },
    created() {
      this.list = this.sortList('name')
      if (el.indexOf('up') > 0) {
        this.type = 'primary'
      }
      if (el.indexOf('down') > 0) {
        this.type = 'success'
      }
    },
    methods: {
      handleClick(e) {
        window.open($(e.target).find('a').attr('href'))
      },

      /**
       *
       * @param {string} type num or name
       */
      sortList(type) {
        let tag
        if (type === 'num') {
          tag = 'span'
        }
        if (type === 'name') {
          tag = 'a'
        }
        let that = this
        this.list = this.list.sort(function(left, right) {
          let x = ($.parseHTML(`<div>${left}</div>`)[0].getElementsByTagName(tag)[0].innerText)
          let y = ($.parseHTML(`<div>${right}</div>`)[0].getElementsByTagName(tag)[0].innerText)
          let result = 0.5 - (x < y)
          if (that.status.indexOf('Down') > 0) {
            return result
          } else {
            return -result
          }
        })
        return this.list
      }
    }
  })
}
