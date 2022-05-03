function expressionMatter(a, b, c) {
  let integers = [a, b, c];
  let arr = [];
  let one = integers.reduce((a, b, c) => a * (b + c));
  arr.push(one);
  let two = integers.reduce((a, b, c) => a * b * c);
  arr.push(two);
  let three = integers.reduce((a, b, c) => a + b * c);
  arr.push(three);
  let four = integers.reduce((a, b, c) => (a + b) * c);
  arr.push(four);
  console.log(arr);
  const orderedArr = arr.sort((a, b) => a - b);
  return orderedArr[0];
}
