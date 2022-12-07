/*
 * @Author: FourteenD 2899385645@qq.com
 * @Date: 2022-12-07 22:45:51
 * @LastEditors: FourteenD 2899385645@qq.com
 * @LastEditTime: 2022-12-07 23:55:14
 * @FilePath: \Note\9999-测试\666.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 冒泡算法

/**
 *
 * @param arr
 * @returns
 */
function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
