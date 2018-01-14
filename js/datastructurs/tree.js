const queue = require('./que');

const makeNode = (value = undefined, left = null, right = null) => ({
  left,
  right,
  value
});

const buildTree = initialValue => {
  const tree = {
    left: null,
    right: null,
    value: initialValue
  };

  const treeQueue = queue(5);

  const TreeAdd = (node, reqTree, side) => {
    if (reqTree[side] === null) {
      return (reqTree[side] = node);
    }

    TreeAdd(node, reqTree[side], side);
  };

  const AddNode = node =>
    node.value > 5 === true ? TreeAdd(node, tree, 'left') : TreeAdd(node, tree, 'right');

  const print = recTree => {
    treeQueue.setTail(recTree);
    do {
      var node = treeQueue.getHead();
      console.log(node.value);
      if (node.left) treeQueue.setTail(node.left);
      if (node.right) treeQueue.setTail(node.right);
    } while (node);
  };

  const printTree = () => print(tree);

  return { AddNode, printTree, treeQueue };
};

const treeBuilt = buildTree(1);
const node1 = makeNode(2);
const node2 = makeNode(3);
const node3 = makeNode(7);
const node4 = makeNode(8);
const node5 = makeNode(9);
const node6 = makeNode(11);

treeBuilt.AddNode(node1);
treeBuilt.AddNode(node2);
treeBuilt.AddNode(node3);
treeBuilt.AddNode(node4);
treeBuilt.AddNode(node5);
treeBuilt.AddNode(node6);

treeBuilt.printTree();
// treeBuilt.treeQueue.PrintQueue();
