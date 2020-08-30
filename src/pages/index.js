import whichPage from '@/pages/router'

const page = whichPage()
if (page) {
  require(`./${page}`)
}
