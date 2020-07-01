function Mergesort(arr){
  let n = arr.length;    
  if (n > 1){
    let mid = n/2;
    let left = [];
    let right = [];
    for (let h = 0; h<mid; h++){
      left.push(arr[h]);
    }
    for (let p = 1; p<n-mid+1; p++){
      right.push(arr[n-p]);
    }
    // // sort the left side
    Mergesort(left);
    // // sort the right side
    Mergesort(right);
    // // merge the sorted left and right sides together
    Merge(left, right, arr);
  }
  // console.log('hello', arr)
  return arr;
}

Mergesort([8,4,23,42,16,15]);

function Merge(left, right, arr) {
  console.log('ppp', left, right);

  let i = 0;
  let j = 0;
  let k = 0;

  while ((i < left.length) && (j < right.length)){
    if (left[i] <= right[j]){
      arr[k] = left[i];
      i = i + 1;
    }
    else {
      arr[k] = right[j];
      j = j + 1;
    }
          
    k = k + 1;
  }

  if (i == left.length){
    for (let p = 1; p<arr.length; p++){
      right.push(arr[p]);
    }

    // console.log('arrrrr', arr , right)
  //    set remaining entries in arr to remaining values in right
  } else {
    for (let p = 1; p<arr.length; p++){
      left.push(arr[p]);
    }    //    set remaining entries in arr to remaining values in left
  }
}
