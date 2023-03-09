function debounce(func, wait) {
  let timeout;
  return function () {
    let args = arguments; // 拿到event对象

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(args)
    }, wait)
  }
}

debounce(function () {
  console.log(this)
}, 1000)()
