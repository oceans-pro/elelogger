import links from '@/config/sidebar-link'

let liList = links.map(item => `<li><a href="${item.url}" target="_blank">${item.name}</a></li>`)
let htmlStr = liList.join('')
export default function addUseful() {
  $('#sidebar_shortcut').append(`
    <div class="sidebar-block">
      <h3 class="catListTitle">常用链接</h3>
      <ul>${htmlStr}</ul>
    </div>
  `)
}
