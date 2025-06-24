function average(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array');
  }
  
  if (arr.length === 0) return 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
      throw new TypeError(`Array element at index ${i} is not a valid number: ${arr[i]}`);
    }
  }
  
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

module.exports = { average };
