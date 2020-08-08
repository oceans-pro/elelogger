require('./download.scss')

export function MyDownloadComponent(
    {
      el = '',
      title = '',
      version = 'v-1.0',
      href = '#',
    }) {
  this.$vue = new Vue({
        el: el,
        template: `
        <div class="source-download">
          <div class="source-type zip">
          </div>
          <div class="source-info">
            <p>{{ title }}</p>
            <p>version:{{ version }}</p>
          </div>
          <div class="download-btn">
            <a :href="href"></a>
          </div>
        </div>`,
        data: {
          title: title,
          version: version,
          href: href
        }
      }
  )
}
