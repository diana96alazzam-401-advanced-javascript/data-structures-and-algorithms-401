const Node = require('./node');
class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  addEnd(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      const current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
}

module.exports = LinkedList;
