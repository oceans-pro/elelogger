import DownloadComponent from './download'
import IntroductionCardComponent from './introduction-card'
import TodoComponent from '@/pages/article/components/todo'
// -------------------------------------------------- 现成的组件 --------------------------------------------------
window.DownloadComponent = DownloadComponent
window.IntroductionCardComponent = IntroductionCardComponent
window.TodoComponent = TodoComponent
window.fn.components = []
window.fn.components.push(DownloadComponent, IntroductionCardComponent,TodoComponent)
