const que = queueSize => {
  const array = [];
  let countInsert = 0;
  let head = 0;
  let tail = 0;

  array.length = queueSize;

  const addTail = data => {
    if (countInsert === queueSize) {
      return console.log('error no more space');
    }
    array[tail] = data;
    tail === queueSize ? (tail = 0) : tail++;
    countInsert++;
    return console.log(`inserted: ${data} to queue`);
  };

  const getHead = () => {
    if (countInsert === 0) {
      return console.log('error: array is empty');
    }
    const data = array[head];
    head === queueSize ? (head = 0) : head++;
    countInsert--;
    return console.log(`your data: ${data}`);
  };

  const PrintQueue = () =>
    console.log(array.reduce((acc, item, index) => `${acc} ${index}:${item} `, 'queue is:'));

  return { addTail, getHead, PrintQueue };
};

const queue = que(5);

queue.addTail('1');
queue.addTail('2');
queue.addTail('3');
queue.addTail('4');
queue.addTail('7');
queue.addTail('8');

queue.PrintQueue();

queue.getHead();
queue.getHead();
queue.PrintQueue();
queue.getHead();
queue.getHead();
queue.getHead();

queue.addTail('8');
queue.addTail('8');

queue.getHead();
queue.getHead();
queue.PrintQueue();
