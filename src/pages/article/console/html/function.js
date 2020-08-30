import {deHighlight} from '@/pages/article/console/util'

export  function getSrcList(that) {
  const codeWithTags = that.innerHTML
  const html = deHighlight(codeWithTags)
  const $dom = $(`<div>${html}</div>`)
  const $scriptList = $dom.children('script')
  let srcList = []
  $scriptList.each(function() {
    srcList.push($(this).attr('src'))
  })
  window.g = window.g || {}
  window.g.newSrcList = srcList
  return srcList
}
