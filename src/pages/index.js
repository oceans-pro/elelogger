import whichPage from '@/pages/router'
const page = whichPage()
require(`./${page}`)
