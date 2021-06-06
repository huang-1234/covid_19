

export function transformTime(timestamp = +new Date()) {
  if (timestamp) {
    const time = new Date(timestamp);
    const y = time.getFullYear();
    const M = time.getMonth() + 1;
    const d = time.getDate();
    const h = time.getHours();
    const m = time.getMinutes();
    const s = time.getSeconds();
    return y + '-' + addZero(M) + '-' + addZero(d) + ' ' + addZero(h) + ':' + addZero(m) + ':' + addZero(s);
  } else {
    return 'time is nothing';
  }
}
function addZero(m) {
  return m < 10 ? '0' + m : m;
}
// console.log(transformTime()) // '2021-06-06 16:53:25