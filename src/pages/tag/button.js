export default function createButtons(el) {
  return new Vue({
    name: el,
    el: el,
    template: `
      <el-button-group id="btn">
        <el-button class="name" size="mini" round plain>
          按名称 <span v-html="nameStatusHTML"></span>
        </el-button>
        <el-button class="num" size="mini" round plain>
          按数量 <span v-html="numStatusHTML"></span>
        </el-button>
      </el-button-group>`,
    data: {
      status: '', // nameUp,nameDown,numUp,numDown
    },
    created() {
      this.status = 'nameDown'
    },
    computed: {
      nameStatusHTML() {
        let result
        switch (this.status) {
          case 'nameUp':
            result = `<i class="el-icon-sort-up"></i>`
            break
          case 'nameDown':
            result = `<i class="el-icon-sort-down"></i>`
            break
          default:
            result = ''
        }
        return result
      },
      numStatusHTML() {
        let result
        switch (this.status) {
          case 'numUp':
            result = `<i class="el-icon-sort-up"></i>`
            break
          case 'numDown':
            result = `<i class="el-icon-sort-down"></i>`
            break
          default:
            result = ''
        }
        return result
      }
    }
  })
}
