require('./_home.scss')
/**
 * 主页，如: https://www.cnblogs.com/oceans/
 */
import homeConfig from '@/config/home'

const routePath = window.location.pathname
// 判断为主页
if (routePath === '/oceans/' ||
    routePath === '/oceans' ||
    (routePath === '/oceans/default.html' && window.location.search === '?page=1')) {
  // -------------------------------------------------- 轮播图 --------------------------------------------------

  // $('.forFlow').prepend(`
  //     <div id="carousel-vue" style="margin: 10px;">
  //       <el-carousel height="250px">
  //         <el-carousel-item v-for="(item, index) in carouselList" :key="index">
  //             <a :href="item.href" style="width: 100%;" target="_blank">
  //               <el-image :src="item.src" style="width: 100%;height:250px" fit="cover"></el-image>
  //             </a>
  //         </el-carousel-item>
  //       </el-carousel>
  //     </div>
  //   `)
  // new Vue({
  //   el: '#carousel-vue',
  //   data: {
  //     carouselList: homeConfig.carouselList
  //   },
  // })

  // -------------------------------------------------- 初始化卡片 --------------------------------------------------
  const size = $('.postTitle').size()
  if (size > 0) {
    for (let i = 0; i < size; i++) {
      console.log(1231)
      $(`.postTitle:eq(${i}),.postCon:eq(${i}),.postDesc:eq(${i})`)
          .wrapAll(`<section class="my-el-card"></section>`)
    }
  }
  const $myElCart = $('.my-el-card')
  if (theme !== 'dark') { // 如果是 白天主题，才需要美化为卡片
    $myElCart.addClass('my-el-card-shadow')
  }
  // -------------------------------------------------- 去除不需要的部分 --------------------------------------------------
  $('.postSeparator').remove()
  $('.postDesc').contents().filter(function() {
    return this.nodeType === 3
  }).remove()
  // -------------------------------------------------- 编辑高亮 --------------------------------------------------
  $('.postDesc a').addClass('hover-link')
}
