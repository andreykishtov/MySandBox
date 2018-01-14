const que = queueSize => {
  const array = [];
  let countInsert = 0;
  let head = 0;
  let tail = 0;

  array.length = queueSize;

  const setTail = data => {
    if (countInsert === queueSize) {
      console.log('error no more space');
      return false;
    }
    array[tail] = data;
    tail === queueSize ? (tail = 0) : tail++;
    countInsert++;
    // console.log(`inserted: ${data} to queue`);
    return true;
  };

  const getHead = () => {
    if (countInsert === 0) {
      console.log('error: array is empty');
      return false;
    }
    const data = array[head];
    head === queueSize ? (head = 0) : head++;
    countInsert--;
    return data;
  };

  const PrintQueue = () =>
    console.log(array.reduce((acc, item, index) => `${acc} ${index}:${item} `, 'queue is:'));

  return { setTail, getHead, PrintQueue };
};

// const queue = que(5);

// queue.setTail('1');
// queue.setTail('2');
// queue.setTail('3');
// queue.setTail('4');
// queue.setTail('7');
// queue.setTail('8');

// queue.PrintQueue();

// queue.getHead();
// queue.getHead();
// queue.PrintQueue();
// queue.getHead();
// queue.getHead();
// queue.getHead();

// queue.setTail('8');
// queue.setTail('8');

// queue.getHead();
// queue.getHead();
// queue.PrintQueue();

module.exports = que;
