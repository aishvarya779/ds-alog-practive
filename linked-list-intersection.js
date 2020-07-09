// import {Linkedlist from './singly-linked-list';
const { Linkedlist } = require('./singly-linked-list');
const list = new Linkedlist();
list.insertAtHead(30);
list.insertAtHead(15);
list.insertAtHead(9);
list.insertAtHead(6);
list.insertAtHead(3);
// console.log(list);
const list2 = new Linkedlist();
list2.insertAtHead(30);
list2.insertAtHead(15);
list2.insertAtHead(10);
list2.insertAtHead(12);

// console.log(interSectionNode(list, list2));

// console.log('Second', listInterSection(list, list2));
// Y problem new implementation
const getLinkedListLength = list => {
  let length = 0;
  while (list) {
    length++;
    list = list.next;
  }
  return length;
};
const listInterSection = (list1, list2) => {
  while (list1.next && list2.next) {
    if (list1.value === list2.value) {
      return list1.value;
    }
    list1 = list1.next;
    list2 = list2.next;
  }

  return -1;
};

const interSectionMethodThird = (list1, list2) => {
  let m = getLinkedListLength(list1.head);
  let n = getLinkedListLength(list2.head);
  let greaterList = m > n ? list1.head : list2.head;
  let smallerList = m < n ? list1.head : list2.head;
  let difference = Math.abs(m - n);
  for (let start = 0; start < difference; start++) {
    greaterList = greaterList.next;
  }
  return listInterSection(greaterList, smallerList);
};
console.log('Result', interSectionMethodThird(list, list2));
