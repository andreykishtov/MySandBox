// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  if (!list.head) {
    return null;
  }

  let q = list.head;
  let q2 = list.head;

  while (q2) {
    if (!q2.next || !q2.next.next) return q;
    q = q.next;
    q2 = q2.next.next;
  }
}

module.exports = midpoint;
