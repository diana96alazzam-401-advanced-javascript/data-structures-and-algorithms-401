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
  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
}

class Hashmap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size); // [] with that size
  }
  hash(key) {
    const sumCharCode = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    console.log(sumCharCode);
    // 19 is a prime number YOU CAN USE ANY OTHER PRIME VALUE
    // since the resulted number can go out of size we will do % size
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey; // 2000
  }
  set(key, value) {
    // we need to get index in the storage (Array)
    const hash = this.hash(key);
    console.log('HASH', hash);
    // we need to check if there is already value at that index
    if (!this.storage[hash]) {
      // if there is no value create linkedlist
      const ll = new LinkedList();
      ll.prepend({ [key]: value });
      this.storage[hash] = ll; // ===> [3222] = {head:{value:{"key","value"},next:{}}}
    } else {
      // we already have a value at that index so just prepend to the front of the linkedList
      this.storage[hash].prepend({ [key]: value });
    }
  }
  add(){

  }
  get(){

  }
  contain(){

  }
}

const hashmap = new Hashmap(4000); // ==> [4000]
hashmap.set('name', 'diana');
hashmap.set('one', 'thing');
hashmap.set('eno', '1');
hashmap.set('neo', '2');
hashmap.set('this', 'nothing');
console.log(hashmap.storage);
console.log(
  'Hey',
  hashmap.storage[3923].head.value['name'],
  hashmap.storage[2118].head.next,
);
