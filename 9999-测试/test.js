// 数组去重


/**
 *
 * @param {*} arr
 * @param {*} key
 * @returns   Array
 */
function unique(arr, key) {
  return Array.from(new Set(arr));
}
