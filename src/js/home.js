/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                             美化主页
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
const routePath = window.location.pathname
if (routePath === '/oceans/' ||
    routePath === '/oceans' ||
    (routePath === '/oceans/default.html' && window.location.search === '?page=1')) {
  // -------------------------------------------------- 轮播图 --------------------------------------------------
  $('.forFlow').prepend(`
      <div id="carousel-vue" style="margin: 10px;">
        <el-carousel height="200px">
          <el-carousel-item v-for="(item, index) in carouselList" :key="index">
              <a :href="item.href" style="width: 100%;">
                <el-image :src="item.src" style="width: 100%;height:200px" fit="cover"></el-image>
              </a>
          </el-carousel-item>
        </el-carousel>
      </div>
    `)
  new Vue({
    el: '#carousel-vue',
    data: {
      carouselList: [
        { // 站长统计
          href: 'https://web.umeng.com/main.php?c=site&a=frame&siteid=1279140987#!/1596382939554/site/overview/1/1279140987/2020-08-02/2020-08-02',
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596395045870&di=9052546770676a928be74c07d9166b55&imgtype=0&src=http%3A%2F%2Fpic5.nipic.com%2F20100116%2F3004787_144103081367_2.jpg',
          title: '',
        },
        {
          href: '',
          src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2425387389,2500015817&fm=26&gp=0.jpg',
          title: '',
        },
        {
          href: '',
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596392668508&di=4ffbfefba26e5f9b00a40574666b367c&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Ffc%2Fs0%2FQJ6923223268.jpg',
          title: '',
        }
      ]
    },
  })

  // -------------------------------------------------- 初始化卡片 --------------------------------------------------
  const size = $('.postTitle').size()
  if (size > 0) {
    for (let i = 0; i < size; i++) {
      $(`.postTitle:eq(${i}),.postCon:eq(${i}),.postDesc:eq(${i})`).wrapAll(`
            <section class="my-el-card" ": ;"></section>
          `)
    }
  }
  $('.my-el-card').css('margin', '10px')
  const theme = $('html').attr('theme')
  if (theme !== 'dark') { // 如果是 白天主题，才需要美化为卡片
    $('.my-el-card').css('box-shadow', '0 2px 12px 0 rgba(0,0,0,.1)')
  }
  // -------------------------------------------------- 去除不需要的部分 --------------------------------------------------
  $('.postSeparator').remove()
  $('.postDesc').contents().filter(function() {
    return this.nodeType === 3
  }).remove()
}
