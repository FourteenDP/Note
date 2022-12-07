// 数组去重
/**
 * 数组去重
 * @param {*} arr
 * @param {*} key
 * @returns
 */
function unique(arr, key) {
  return Array.from(new Set(arr));
}
