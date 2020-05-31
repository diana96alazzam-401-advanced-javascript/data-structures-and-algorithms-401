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
    node.next = this.head;
    this.head = node;
    return this.head;
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
    string = `{ ${current.value} }`;
    while (current.next){
      current = current.next;
      string = string + ` -> { ${current.value} }`;
    }
    return string + ` -> { ${current.next} }`;
  }

  append(value){
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this.head;
    }   

    let current = this.head;
    while (current.next){
      current = current.next;
    }
    current.next = node;
    return this.head;
  }

  insertBefore(value, newVal){
    const addedNode = new Node(newVal);

    let current = this.head;

    if(value === current.value){
      this.insert(newVal);
    } else {
      while (current.next){
        let prev = current;
        current = current.next;
        if (value === current.value){
          addedNode.next = current;
          prev.next = addedNode;
          return prev;
        }
      }
    }
  }

  insertAfter(value, newVal){
    const addedNode = new Node(newVal);

    let current = this.head;

    if(value === current.value){
      this.append(newVal);
    } else {
      while (current.next){
        current = current.next;
        let prev = current;
        if (value === current.value){
          addedNode.next = current.next;
          prev.next = addedNode;
        }
      }
    }
  }

}

const linkedListInstance = new LinkedList();
linkedListInstance.append(1);
linkedListInstance.append(3);
linkedListInstance.append(2);
linkedListInstance.append(4);


console.log(linkedListInstance.insertAfter(3,5));

console.log(linkedListInstance.toString());

module.exports = LinkedList;







