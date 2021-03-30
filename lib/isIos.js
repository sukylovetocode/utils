export function isIos() {
  var ua = navigator.userAgent;
  var Agents = new Array("iPhone", "iPad", "iPod");
  var flag = false;
  for (var v = 0; v < Agents.length; v++) {
    if (ua.indexOf(Agents[v]) > 0) {
      flag = true;
      break;
    }
  }
  return flag;
}

export default isIos;
