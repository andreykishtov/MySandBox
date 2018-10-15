// const r = 3;

// function* infinite_ap(a) {
//   for (;;) {
//     a = a + r;
//     yield a;
//   }
// }

// var sum = infinite_ap(5);

// console.log(sum.next()); // returns { value : 8, done : false }
// console.log(sum.next()); // returns { value : 11, done: false }


var consoleLogThunk = (msg) => () => console.log(msg);

var generator = function*() {
  yield consoleLogThunk("Yo");
  yield consoleLogThunk("Dawg");
  yield consoleLogThunk("!!!");
}

var delegator_function = function* () {
  yield consoleLogThunk("I yielded before delegated yield");
  yield* generator();
  yield consoleLogThunk("I yielded after delegated yield");
}

var k = delegator_function();

k.next().value();
k.next().value();
k.next().value();

console.log(k.next()); // If you call k.next() , it will throw an Type error , as value is undefined which is not a function
