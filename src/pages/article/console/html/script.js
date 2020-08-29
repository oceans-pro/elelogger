import {loadAllScriptWithPromise} from '@/store/app-function/script'
import {deHighlight} from '@/pages/article/console/util'

export function script(that) {
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

  loadAllScriptWithPromise(srcList)
    .then(_ => {
      $(document).trigger('loadAllScriptFinish')
      window.g.events.push('loadAllScriptFinish-有新的script')
    })
    .catch(err => {
      alert(err)
    })
}
