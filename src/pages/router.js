/**
 * 判断当前在哪个界面
 * @returns {string} 随笔 | 首页 | 标签页
 */
export default function whichPage() {
  const pathname = window.location.pathname

  if ($('#post_detail').length > 0) {
    return 'article'
  }

  if (pathname === '/oceans/' ||
    pathname === '/oceans' ||
    pathname === '/oceans/default.html') {
    return 'home'
  }

  if (pathname === `/${userPath}/tag/`) {
    return 'tag'
  }
}
