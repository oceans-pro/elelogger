function timer(vue) {
  const arr = ['loading', 'loading.', 'loading..', 'loading...']
  let index = 0
  console.log(arr[0])
  return setInterval(function() {
    if (index === arr.length - 1) index = 0
    index++
    console.log(arr[index])
  }, 500)
}
timer()
