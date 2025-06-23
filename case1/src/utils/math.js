/**
 * 数値配列の合計を計算します
 * @param {number[]} arr - 合計を計算する数値の配列
 * @returns {number} 配列内の全数値の合計値。空配列の場合は0を返します
 * @example
 * sumNumbers([1, 2, 3]) // returns 6
 * sumNumbers([]) // returns 0
 * sumNumbers([-1, 1]) // returns 0
 */
export function sumNumbers(arr) {
  let total = 0;
  for (const n of arr) {
    total += n;
  }
  return total;
}

/**
 * 数値配列の平均値を計算します
 * @param {number[]} arr - 平均値を計算する数値の配列
 * @returns {number} 配列の平均値。空配列の場合は0を返します
 * @example
 * average([1, 2, 3]) // returns 2
 * average([]) // returns 0
 * average([10, 20]) // returns 15
 */
export function average(arr) {
  if (arr.length === 0) return 0;
  return sumNumbers(arr) / arr.length;
}
