'use strict';
const linkedListModule = require('../challenges/Data-Structures/linkedList/linked-list');
const mergeFunction = require('../challenges/Data-Structures/llMerge/ll-merge.js');


describe('Merge two Linked Lists', () => {
  it('Merge two linked lists with same length', () => {
    const linkedListInstance1 = new linkedListModule.LinkedList();
    linkedListInstance1.append(1);
    linkedListInstance1.append(3);
    linkedListInstance1.append(2);
    const linkedListInstance2 = new linkedListModule.LinkedList();
    linkedListInstance2.append(5);
    linkedListInstance2.append(9);
    linkedListInstance2.append(4);
    let newLinked = mergeFunction(linkedListInstance1,linkedListInstance2);
    expect(newLinked.toString()).toStrictEqual('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> { null }');
  });
  it('Merge two linked lists with different length (first is longer', () => {
    const linkedListInstance1 = new linkedListModule.LinkedList();
    linkedListInstance1.append(1);
    linkedListInstance1.append(3);
    const linkedListInstance2 = new linkedListModule.LinkedList();
    linkedListInstance2.append(5);
    linkedListInstance2.append(9);
    linkedListInstance2.append(4);
    let newLinked = mergeFunction(linkedListInstance1,linkedListInstance2);
    expect(newLinked.toString()).toStrictEqual('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 4 } -> { null }');
  });
  it('Merge two linked lists with different length (second is longer', () => {
    const linkedListInstance1 = new linkedListModule.LinkedList();
    linkedListInstance1.append(1);
    linkedListInstance1.append(3);
    linkedListInstance1.append(2);
    const linkedListInstance2 = new linkedListModule.LinkedList();
    linkedListInstance2.append(5);
    linkedListInstance2.append(9);
    let newLinked = mergeFunction(linkedListInstance1,linkedListInstance2);
    expect(newLinked.toString()).toStrictEqual('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { null }');
  });

});


