// 数组去重

/**
 * @param {Array} arr
 * @return {Array}
 * @description 数组去重
 * @example unique([1, 2, 3, 3, 4, 5, 5, 6]) => [1, 2, 3, 4, 5, 6]
 */
function unique(arr) {
  return Array.from(new Set(arr));
}
