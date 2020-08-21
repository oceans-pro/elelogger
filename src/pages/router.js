import modifyTagPage from '@/pages/tag'

export default function listenRoute() {
  if (location.pathname === `/${userPath}/tag/`) {
    modifyTagPage()
  }
}
