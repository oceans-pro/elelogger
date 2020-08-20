import './_card.scss'

export default function MyIntroductionCardComponent(
  {
    el = '',
    list = [{}]
  }) {
  this.$vue = new Vue({
    el: el,
    data: {
      list: list,
    },
    // 让CSS flex布局最后一行列表左对齐的N种方法
    // https://www.zhangxinxu.com/wordpress/2019/08/css-flex-last-align/
    template: `
      <section id="${el.substring(1)}">
        <div class="introduction-container" >

          <div class="introduction-card my-card" v-for="item in list" :key="item.name">
            <el-image class="logo left" lazy fit="fill" :src="item.img" :alt="item.name"></el-image>
            <div class="right">
              <a :href="item.href" style="display: none">{{ item.href }}</a>
              <div class="name">{{ item.name }}</div>
              <div class="desc">{{ item.desc }}</div>
            </div>
          </div>
          
          <div class="placeholder"></div>
          <div class="placeholder"></div>
          <div class="placeholder"></div>
          <div class="placeholder"></div>
          <div class="placeholder"></div>
        </div>
      </section>
    `,
    mounted() {
      console.log(`${el} .introduction-card`)
      window.$(`${el} .introduction-card`).click(function() {
        window.open($(this).find('a').attr('href'))
      })
    }
  })
}
/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                 list的格式
{
        img: 'https://cn.vuejs.org/images/logo.png',
        name: 'Vue',
        desc: '渐进式JavaScript框架',
        href: 'https://cn.vuejs.org/',
},
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
