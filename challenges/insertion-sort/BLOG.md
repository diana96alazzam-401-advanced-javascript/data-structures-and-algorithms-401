## Insertion sort
  - Array sorting:
    * Create a for loop that iterate the array with a starting `i = 1`.
    * Inside the for loop define two variables; one that will hold a temporary value for the first element to be compared with called `temp` and the other to hold its index aclled `j`.
    * Give the `j` variable the value of the iteration minus one.
    * Give the `temp` variable the value of the `i` index of the arr.
    * Create a while loop with the conditions of the `j` to be more than or equal `0` and the `temp` to be less than the array value of index `j` in order to compare and sort the two elements.
    * While the conditions are true; make the array value of index `j+1` equals to the array value of `j` (the previous index because its less than it).
    * After that, increment `j` by one.
    * Outside the while loop (when the temp value is grater than the array value of index `j` or `j` is less than 0) then give the array with index `j+1` the value of the temporary variable. 