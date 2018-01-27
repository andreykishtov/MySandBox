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

  getAt(index) {
    let node = this.getFirst();
    let counter = 0;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return null;
    }
    const size = this.size();

    if (index > size || index < 0) {
      return null;
    }

    if (index === 0) {
      return this.removeFirst();
    }

    if (size === index) {
      this.removeLast();
    }

    const prev = this.getAt(index - 1);

    if (!prev || !prev.next) {
      return null;
    }

    prev.next = prev.next.next;
  }

  insertAt(data, index) {
    if (!this.head || index === 0) {
      return this.insertFirst(data);
    }
    // const size = this.size();

    // if (size < index || index < 0) {
    //   return this.insertLast(data);
    // }

    const node = this.getAt(index - 1) || this.getLast();
    const newNode = new Node(data, node.next);
    node.next = newNode;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
