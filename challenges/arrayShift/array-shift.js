
let insertShiftArray = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > val) {
            let firstSlice = arr.slice(0, i);
            firstSlice.push(val);
            let secondSlice = arr.slice(i, arr.length);
            secondSlice.forEach(element => {
                firstSlice.push(element);
            })
            return firstSlice;
        }
    }
}

console.log(insertShiftArray([2,4,6,8], 5));
console.log(insertShiftArray([4,8,15,23,42], 16));


module.exports = insertShiftArray;



