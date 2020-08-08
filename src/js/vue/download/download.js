require('./download.scss')
window.createDownload = function createDownload(
    {
      el = '',
      title = '',
      version = 'v-1.0',
      href = '#'
    }) {
  console.log('da')
  return new Vue({
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
