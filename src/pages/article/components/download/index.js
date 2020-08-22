require('./_download.scss')

export default function DownloadComponent(
  {
    el = '',
    title = '',
    version = 'v-1.0',
    href = '#',
  }) {
  return new Vue({
      el: el,
      template: `
        <div class="download-component">
          <div class="left">
            <div class="source-type zip">
            </div>
            <div class="source-info">
              <div id="msg-1">{{ title }}</div>
              <div id="msg-2">version:{{ version }}</div>
            </div>
          </div>
          <a class="download-btn" :href="href"></a>
        </div>
      `,
      data: {
        title: title,
        version: version,
        href: href
      }
    }
  )
}
