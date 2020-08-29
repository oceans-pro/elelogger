export function loadScript(src, callback) {
  let script = document.createElement('script')
  let head = document.getElementsByTagName('head')[0]
  script.type = 'text/javascript'
  script.src = src
  if (script.addEventListener) {
    script.addEventListener('load', function() {
      callback()
    }, false)
  } else if (script.attachEvent) { // ie
    script.attachEvent('onreadystatechange', function() {
      let target = window.event.srcElement
      if (target.readyState === 'loaded') {
        callback()
      }
    })
  }
  head.appendChild(script)
}

export function loadScriptWithPromise(src) {
  return new Promise(((resolve, reject) => {
    loadScript(src, function() {
      resolve()
    })
  }))
}

export function loadAllScriptWithPromise(srcList) {
  let promiseList = srcList.map(item => loadScriptWithPromise(item))
  return Promise.all(promiseList)
}
