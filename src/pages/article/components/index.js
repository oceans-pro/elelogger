import DownloadComponent from './download'
import IntroductionCardComponent from './introduction-card'

// -------------------------------------------------- 现成的组件 --------------------------------------------------
/**
 * markdown（#cnblogs_post_body）的子组件过多
 * 为此将其组件单独放到这里。
 * 也就是说，这些组件是会被Markdown中用到的
 */
window.DownloadComponent = DownloadComponent
window.IntroductionCardComponent = IntroductionCardComponent
window.ele.components = []
window.ele.components.push(DownloadComponent, IntroductionCardComponent)
