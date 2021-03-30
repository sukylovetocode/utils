export function isWeixin() {
  var ua = navigator.userAgent;
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
}

export default isWeixin;
