const que = (queueSize => {
  const array = [];
  let countInsert = 0;
  let head = 0;
  let tail = 0;

  array.length = queueSize;

  const addToQueue = data => {
    if (countInsert === array.length) {
      return console.log('error no more space');
    }
    array[tail] = data;
    tail += 1;
    countInsert++;
    return console.log(`inserted: ${data} to queue`);
  };

  const getHead = () => {
    if (!countInsert) {
      return console.log('error: array is empty');
    }
    countInsert--;
    head += 1;
    return console.log(`your data: ${array[head - 1]}`);
  };

  return { addToQueue, getHead };
})();

const queue = que(5);

queue.addToQueue('1');
queue.addToQueue('2');
queue.addToQueue('3');
queue.addToQueue('4');

queue.getHead();
queue.getHead();
queue.getHead();
queue.getHead();
queue.getHead();
