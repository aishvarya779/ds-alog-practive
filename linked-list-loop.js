// time complexity O(n) + O(n) = O(2n) => O(n)

const { Linkedlist } = require('./singly-linked-list');
let tempData = [1, 2, 3, 4, 5, 6];
const list = new Linkedlist();
tempData.forEach(item => {
  list.insertAtEnd(item);
});
list.head.next.next.next.next.next.next = list.head.next.next;

const findLoop = list => {
  let p1 = list.head;
  let p2 = list.head;
  let loop = false;
  while (p1.next.next && !loop) {
    p1 = p1.next.next;
    p2 = p2.next;
    if (p1.value === p2.value) {
      loop = true;
    }
  }

  if (loop) {
    p1 = list.head;
    while (p1.value !== p2.value) {
      p1 = p1.next;
      p2 = p2.next;
    }
    return p1;
  } else {
    return false;
  }
};

console.log(findLoop(list));
