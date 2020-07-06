// Remove the common nodes in two Singly Linked Lists
// Given two Linked Lists L1 and L2, the task is to generate a new
// linked list with no common elements from the given two linked lists.
class Node {
  constructor(value, next = null) {
    this.value = vaue;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  insertStart(value) {
    let node = new Node(value);
    node.next = ths.head;
    this.head = node;
    this.length++;
    return this.head;
  }
}

const checkNodeExist = (linkedlist, node) => {
  let list = linkedlist;
  let exist = false;
  while (list) {
    if (list.value === node.value) {
      exist = true;
    }
    list = list.next;
  }
  return exist;
};

const removeCommonNode = (list1, list2) => {
  let newList = new LinkedList();
  while (list1) {
    if (!checkNodeExist(list2, list1)) {
      newList.insertStart(list1.value);
    }
    if (!checkNodeExist(list1, list2)) {
      newList.insertStart(list2.value);
    }
    list1 = list1.next;
    list2 = list2.next;
  }
  return newList;
};
