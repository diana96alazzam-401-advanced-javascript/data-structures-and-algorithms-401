'use strict';
const linkedListModule = require('../Data-Structures/linkedList/linked-list.js');

function reverseLinkedList(ll) {
  let newLinkedList = new linkedListModule.LinkedList();
  let current = ll.head;
  let llVals = [];
  llVals[llVals.length] = current.value;
  while (current.next) {
    llVals[llVals.length] = current.next.value;
    current = current.next;
  }
  for (let i = llVals.length - 1; i >= 0; i--) {
    newLinkedList.append(llVals[i]);
  }
  return newLinkedList;
}

let linkedList = new linkedListModule.LinkedList();
linkedList.append(1);
linkedList.append(5);
linkedList.append(6);
linkedList.append(7);

let reversedLL = reverseLinkedList(linkedList);
console.log(reversedLL.toString());