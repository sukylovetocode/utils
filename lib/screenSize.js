// 获取我们屏幕大小
export function screenSize() {
  let wid =
    document.body.clientWidth ||
    document.documentElement.clientWidth ||
    window.innerWidth;
  let hei =
    document.body.clientHeight ||
    document.documentElement.clientHeight ||
    window.innerHeight;
  return { wid, hei };
}

export default screenSize;
