const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(path.join(__dirname, '../src/upload/footer-deploy.html'))
const bigJS = fs.readFileSync(path.join(__dirname, '../dist/bundle.js'))
let output = html.toString().replace(/\/\/\/([\d|\D]*)\/\/\//gm, function(value, $1) {
  return bigJS
})

fs.writeFileSync(path.join(__dirname, '../dist/footer.html'), output)
