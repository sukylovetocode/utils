export function isPc() {
  var ua = navigator.userAgent;
  var Agents = new Array(
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod"
  );
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (ua.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

export default isPc;
