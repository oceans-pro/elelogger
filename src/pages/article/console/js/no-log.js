import {evalSafely} from '@/pages/article/console/util'

export default function noLog(that) {
  evalSafely($(that).text())
}
