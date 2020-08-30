import {evalSafely} from '@/pages/article/console/util'

export default function(that) {
  evalSafely($(that).text())
  $(that).parents('.copyItem').remove()
}
