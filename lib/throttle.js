export function throttle(fn, wait) {
  var prev = new Date().getTime();
  return function () {
    var now = new Date().getTime();
    if (now - prev > wait) {
      fn.apply(this, arguments);
      prev = now;
    }
  };
}

export default throttle;
