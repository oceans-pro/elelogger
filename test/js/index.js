console.log('index')

if (1 > 2) {
  require('./1')
} else {
  require('./2')
}

console.log('--------------------')
for (let i = 1; i <= 3; i++) {
  require(`./${i}.js`)
}
