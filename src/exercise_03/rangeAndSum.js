export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  const arr = [];

  const num = Math.abs(end - start);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < num; i++) {
    if (end < 0) {
      arr.push(start - i);
    } else {
      arr.push(start + i);
    }
  }
  return arr;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-shadow
  const sum = numbers.reduce((acc, current) => acc + current, 0);

  return sum;
}
