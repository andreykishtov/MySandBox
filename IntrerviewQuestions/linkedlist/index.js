// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(record) {
    this.head = new Node(record, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      node = node.next;
      counter++;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (this.head === null) {
      return null;
    }

    let curr = this.head;
    let prev = curr;

    if (curr.next === null) {
      this.head = null;
      return curr;
    }

    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = null;
    return curr;
  }

  insertLast(record) {
    const lastNode = this.getLast();
    const newNode = new Node(record);

    lastNode ? (lastNode.next = newNode) : (this.head = newNode);
  }
}

module.exports = { Node, LinkedList };
