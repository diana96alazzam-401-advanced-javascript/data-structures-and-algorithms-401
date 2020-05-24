'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }   

    let current = this.head;
    while (current.next){
      current = current.next;
    }
    current.next = node;
    return this;
  }

  includes(value){
    let current = this.head;
    if(value === current.value){
      return true;
    } else {
      while (current.next){
        current = current.next;
        if (value === current.value){
          return true;
        }
      }
    }
    return false;
  }

  toString() {
    let current = this.head;
    let string = '';
    if (!current.next){
      string = `{ ${current.value} }` + ` -> { ${current.next} }`;
    }
    string = `{ ${current.value} }`;
    while (current.next){
      current = current.next;
      string = string + ` -> { ${current.value} }`;
    }
    return string + ` -> { ${current.next} }`;
  }
}

// let instance = new LinkedList();
// instance.insert(9);
// instance.insert(7);
// instance.insert(5);
// instance.insert(3);
// instance.insert(1);

// console.log('include', instance.includes(9));
// console.log('instance', instance.toString());

module.exports = LinkedList;







