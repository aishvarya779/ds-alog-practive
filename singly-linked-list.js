// Reverse a linked list
// Given pointer to the head node of a linked list, the task is to reverse the linked list.
// We need to reverse the list by changing links between nodes.
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtHead(value) {
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    return this.head;
  }

  insertAtEnd(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.size++;
      return this.head;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = newNode;
    this.size++;
    return this.head;
  }

  reverse() {
    let node = this.head;
    let prev, temp;
    while (node !== null) {
      temp = node.next;
      node.next = prev;
      prev = node;
      node = temp;
    }
    return prev;
  }
}
module.exports = {
  Node,
  Linkedlist
};
