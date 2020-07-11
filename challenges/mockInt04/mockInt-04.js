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
    this.storage = new Array(size);
  }
  hash(key) {
    const sumCharCode = key.charCodeAt(0);
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey;
  }
  add(key, value) {
    const hash = this.hash(key);
    if (!this.storage[hash]) {
      const ll = new LinkedList();
      ll.prepend({ [key]: value });
      this.storage[hash] = ll;
    } else {
      this.storage[hash].prepend({ [key]: value });
    }
  }

}


function uniqueChar(str){
  let splitted = str.split(' ');
  let joined = splitted.join('');
  joined.toLowerCase();
  let finSplit = joined.split('');
  let hashmap = new Hashmap(4000);
  let unique = true;

  for (let i = 0; i<finSplit.length; i++){
    if(finSplit[i]){
      let hashedKey = hashmap.hash(finSplit[i]);      
      if (!hashmap.storage[hashedKey]){
        hashmap.add(finSplit[i] , finSplit[i]);
      } else {
        unique = false;
        finSplit.length ++;
      }
    }
  }
  return unique;
}

console.log(uniqueChar('The quick brown fox jumps over the lazy dog'));

console.log(uniqueChar('I love cats'));

console.log(uniqueChar('Donald the duck'));
