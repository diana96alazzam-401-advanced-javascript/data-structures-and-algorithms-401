'use strict';

const Stack = require('../stacksAndQueues/stacks-and-queues');

class PseudoQueue {
  constructor(){
    this.storage = new Stack();
    this.front = null;    
  }
  enqueue(value){
    this.storage.push(value);
    if (!this.front) {
      this.front = this.storage[0];
    //   this.front.next = null;
    } else {
      var count = 2;
      for (let i = 0; i < this.storage.length - 1; i++) {
        this.storage[i].next = count;
        count++;
      }
    }
  }
  dequeue(){
    this.storage.pop();
    this.front = (this.storage[0]) ? (this.storage[0]) : null;
    for (let i = 0; i < this.storage.length - 1; i++) {
      this.storage[i].next = this.storage[i].next - 1;
    }
  }
}

let newPseudoQueue = new PseudoQueue();
newPseudoQueue.enqueue(5);
newPseudoQueue.enqueue(10);
newPseudoQueue.enqueue(15);
newPseudoQueue.enqueue(20);

newPseudoQueue.dequeue();



console.log(newPseudoQueue);

newPseudoQueue.storage.storage.forEach((elem)=> {
  console.log(elem);
});