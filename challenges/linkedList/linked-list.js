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
    if (!(this.includes(value))){
      current.next = node;
      return this;
    }
  }
  includes(value){
    let current = this.head;
    while (current.next){
      if (value === current.value){
        current = current.next;
        return true;
      }
    }
    return false;
  }
  toString() {
    let current = this.head;
    let string = '';
    while (current.next){
      string = `{ ${current.value} }`;
      current = current.next;
      string = string + ` -> { ${current.value} }` + ` -> { ${current.next} }`;

    }
    return string;
  }
}

let instance = new LinkedList();
instance.insert(6);
instance.insert(7);


console.log('instance', instance);
console.log('instance', instance.toString());






