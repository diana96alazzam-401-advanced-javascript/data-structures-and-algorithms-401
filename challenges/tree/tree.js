'use strict';

const util = require('util');

class Node {
  constructor(value, right = null, left = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
  binaryAddNode(node){
    if(node.value<this.value){
      if(this.left === null){
        this.left = node;
      } else {
        this.left.binaryAddNode(node);
      }
    } else if (node.right>this.value) {
      if (this.right === null) {
        this.right = node;
      } else {
        this.right.binaryAddNode(node);
      }
    }
  }
}
class BinaryTree {

  constructor(root){
    this.root = root;
  }
  preOrder() {
    //   root - left - right
    let results = [];
    let _traversal = (node) => {
      results.push(node.value);
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }
  inOrder() {
    //   left - root - right
    let results = [];
    let _traversal = (node) => {
      if (node.left) _traversal(node.left);
      results.push(node.value);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }
  postOrder() {
    //   left - right - root
    let results = [];
    let _traversal = (node) => {
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
      results.push(node.value);
    };
    _traversal(this.root);
    return results;
  }
}

class BinarySearchTree {
  constructor() {  
    this.root = null;
  }
  add(val) {
    let newNode = new Node(val);
    if (this.root === null){
      this.root = newNode;
    } else {
      this.root.binaryAddNode(newNode);
    }
  }
}






// let tree = new BinaryTree(five);
let newBinarySearchTree = new BinarySearchTree();
for (let i = 1; i<10; i++){
  newBinarySearchTree.add(i);
}


console.log(util.inspect(newBinarySearchTree, false, null, true));

// console.log(newBinarySearchTree);


module.exports = {
  Node,
  BinaryTree,
};
