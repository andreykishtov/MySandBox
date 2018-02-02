2.2 If you must reassign references, use let instead of var. eslint: no-var jscs: disallowVar

Why? let is block-scoped rather than function-scoped like var.
// bad
var count = 1;
if (true) {
  count += 1;
}

// good, use the let.
let count = 1;
if (true) {
  count += 1;
}

2.3 Note that both let and const are block-scoped.

// const and let only exist in the blocks they are defined in.
{
  let a = 1;
  const b = 1;
}
console.log(a); // ReferenceError
console.log(b); // ReferenceError
