export function debounce(fn, wait) {
  var timer;
  return function (arguments) {
    var args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    var that = this;
    timer = setTimeout(function () {
      fn.apply(that, args);
    }, wait);
  };
}

export default debounce;
