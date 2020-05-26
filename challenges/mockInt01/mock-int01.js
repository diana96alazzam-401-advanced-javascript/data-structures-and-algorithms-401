
let fab = (num) => {
  let fabArr = [0, 1, 1];
  for (let i = 3; i <= num; i++) {
    fabArr[fabArr.length] = (fabArr[i - 1] + fabArr[i - 2]);
  }
  return fabArr[num];
};

console.log(fab(1));
console.log(fab(6));
console.log(fab(14));