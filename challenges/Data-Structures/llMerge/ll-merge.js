'use strict';
const Node = require('../linkedList/linked-list.js');
const LinkedList = require('../linkedList/linked-list.js');

function mergeLists(linkedList1, linkedList2){
  let first = linkedList1.head.value;
  let second = linkedList2.head.value;
  let firstNewNode = new Node(first);
  let newLinkedList = new LinkedList();
  newLinkedList.head = firstNewNode;
  newLinkedList.append(second); 
 
  while((linkedList1.head.next) || ( linkedList2.head.next)){
    if (linkedList1.head.next){
      let val = linkedList1.head.next.value;
      newLinkedList.append(val);
    }
    if(linkedList2.head.next){
      let val = linkedList2.head.next.value;
      newLinkedList.append(val);
    }  
    linkedList1 = {head: linkedList1.head.next};
    linkedList2 = {head: (linkedList2.head.next)};
    console.log('check!', linkedList2);
  }
  return newLinkedList;
}
  
const linkedListInstance1 = new LinkedList();
linkedListInstance1.append(1);
linkedListInstance1.append(3);
linkedListInstance1.append(2);
const linkedListInstance2 = new LinkedList();
linkedListInstance2.append(5);
linkedListInstance2.append(9);
linkedListInstance2.append(4);
  
let newLinked = mergeLists(linkedListInstance1,linkedListInstance2);
console.log('hello!!!!', newLinked.toString());

module.exports = mergeLists;

  