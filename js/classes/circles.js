class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  isOverlapping(circle) {
    const xDiff = this.x - circle.x;
    const yDiff = this.y - circle.y;
    const d = Math.sqrt(xDiff * xDiff + yDiff * yDiff);

    return d < this.r + circle.r;
  }
}

class CircleStore {
  constructor() {
    this.store = [];
  }

  addCircle(circle) {
    if(!this.store[circle.x]) {
      this.store[circle.x] = [];
    }
    this.store[circle.x].push(circle);
    return this;
  }

  isOverlapping(circle) {
    let searchArr = [];
    for (var i = circle.x - circle.r; i <= circle.x + circle.r; i++) {
      if(this.store[i]){
        searchArr = [...searchArr, ...this.store[i]];
      }
    }

    return searchArr.filter(item => item.isOverlapping(circle));
  }
}

const first = new Circle(6, 5, 3);
const sec = new Circle(1, 1, 3);
const third = new Circle(1, 1, 3);
const forth = new Circle(10, 5, 3);

const circleStore = new CircleStore();
circleStore
  .addCircle(first)
  .addCircle(sec)
  .addCircle(third);
// console.log(first.isOverlapping(sec));
console.log(circleStore.isOverlapping(forth));
