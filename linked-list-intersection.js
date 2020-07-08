// import {Linkedlist from './singly-linked-list';
const { Linkedlist } = require('./singly-linked-list');
const list = new Linkedlist();
list.insertAtHead(3);
list.insertAtHead(6);
list.insertAtHead(9);
list.insertAtHead(15);
list.insertAtHead(30);
// console.log(list);
const list2 = new Linkedlist();
list2.insertAtHead(10);
list2.insertAtHead(15);
list2.insertAtHead(25);
const interSectionNode = (list1, list2) => {
  let m = getLinkedListLength(list1.head);
  let n = getLinkedListLength(list2.head);
  let greaterList = m > n ? list1.head : list2.head;
  let smallerList = m > n ? list2.head : list1.head;
  let interSectionNode;
  while (!interSectionNode && smallerList.next) {
    if (checkNodeExist(greaterList, smallerList)) {
      interSectionNode = smallerList;
    }
    smallerList = smallerList.next;
  }
  return interSectionNode;
};

const checkNodeExist = (list, node) => {
  let res = false;
  while (!res && list.next) {
    if (list.value === node.value) {
      res = true;
    }
    list = list.next;
  }

  return res;
};
const getLinkedListLength = list => {
  let length = 0;
  while (list.next) {
    length++;
    list = list.next;
  }
  return length;
};

console.log(interSectionNode(list, list2));

// method 2nd for intersection;

const listInterSection = (list1, list2) => {
  let intersectNode;
  list1 = list1.head;
  list2 = list2.head;
  while (list1.next && list2.next) {
    if (list1.value === list2.value) {
      intersectNode = list1;
    }
    list1 = list1.next;
    list2 = list2.next;
  }

  return intersectNode;
};

console.log('Second', listInterSection(list, list2));
