// 可以非整数
export function randomNum(min, max) {
  return Math.random() * (max - min) + min;
}

export default randomNum;
