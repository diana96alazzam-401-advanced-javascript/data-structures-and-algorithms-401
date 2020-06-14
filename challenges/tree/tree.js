'use strict';

class Node {
  constructor(value, right = null, left = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

class BinaryTree {
  constructor(root) {
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
  constructor(root) {
    this.root = root;
  }
  add(val) {
    var newNode = new Node(val);

    if (this.root === null)
      this.root = newNode;
    else {
      this.insertNode(this.root, newNode);
    }
  }


  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      }
      else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  //   contains(){

  //   }
}

const five = new Node(5);
const two = new Node(2);
const four = new Node(4);
const six = new Node(6);
const three = new Node(3);
const eight = new Node(8);
const nine = new Node(9);
const one = new Node(1);
const seven = new Node(7);
const ten = new Node(10);
const twentyTwo = new Node(22);

five.left = two;
five.right = six;
// two.left = three;
// two.right = six;
// three.left = eight;
// six.right = nine;
// four.left = one;
// four.right = seven;
// seven.left = ten;
// seven.right = twentyTwo;



let tree = new BinaryTree(five);
let newBinarySearchTree = new BinarySearchTree();
newBinarySearchTree.add(1);
console.log(tree.postOrder());
