// const array = [];
// const innerArray = [];
// const callback = () => array.push(Math.random() * 100);

// setInterval(callback, 100);

// setInterval(() => {
//   innerArray.length = 0;
//   for (var i = 0; i < 10; i++) {
//     innerArray.push(array.shift());
//   }
//   array.length = 0;

//   setTimeout(() => {
//     console.log('main Array:', array);
//   }, 1000);
//   console.log('innerArray:', innerArray);
// }, 1100);

// const me = () => console.log(this.x);

// var x = 1;

// me.apply(x);

class andrey {
  constructor(data) {
    this.data = data;
  }

  folor() {}

  get myData() {
    return this.data;
  }

  set yourData(data) {
    this.data = data;
  }
}

const me = new andrey(10);

console.log(me.myData);
me.yourData = 11;
console.log(me.myData);
