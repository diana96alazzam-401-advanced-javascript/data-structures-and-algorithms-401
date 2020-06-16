'use strict';

function eenyMeenyMinyMoe(arr, k) {
  let queue = [];

  for (let i = 1; i <= arr.length; i++) {
    queue.push(arr[i - 1]);
  }

  let out = [];

  while (queue.length !== 1) {
    for (let j = 1; j < k; j++) {
      queue.push(queue.shift());
    }
    out.push(queue.shift());
  }
  return queue[0];
}

console.log(eenyMeenyMinyMoe(['A', 'B', 'C', 'D', 'E'], 3));