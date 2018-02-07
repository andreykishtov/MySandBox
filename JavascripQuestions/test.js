function almostIncreasingSequence(sequence) {
  let len = sequence.length;
  for (let index = 0; index < len - 1; ++index) {
    if (sequence[index] >= sequence[index + 1]) {
      let arr = [...sequence];
      arr.splice(index, 1);
      //let arr = [...sequence.slice(0, index), ...sequence.slice(index + 1, len)];
      if (check(arr)) {
        return true;
      }
    }
  }
  return false;
}

function check(Arr) {
  let result = true;
  Arr.reduce((acc, currentValue) => {
    if (acc >= currentValue) {
      result = false;
    }
    return currentValue;
  }, -Infinity);
  return result;
}

$('.main').mouseup(function() {
  var range, sel;
  var colour = 'yellow';

  if (window.getSelection) {
    // IE9 and non-IE
    try {
      if (!document.execCommand('BackColor', false, colour)) {
        makeEditableAndHighlight();
      }
    } catch (ex) {
      makeEditableAndHighlight();
    }
  }
});

function makeEditableAndHighlight() {
  var colour = 'yellow';
  var range,
    sel = window.getSelection();
  if (sel.rangeCount && sel.getRangeAt) {
    range = sel.getRangeAt(0);
  }
  document.designMode = 'on';
  if (range) {
    sel.removeAllRanges();
    sel.addRange(range);
  }
  // Use HiliteColor since some browsers apply BackColor to the whole block
  if (!document.execCommand('HiliteColor', false, colour)) {
    document.execCommand('BackColor', false, colour);
  }
  document.designMode = 'off';

  saveSelections(sel);
}

function saveSelections(selection) {
  if (selection) {
    var highlight = selection.toString();
    // localStorage.setItem('textSelection', highlight);
  }
}

function restoreSelection() {
  //var highlight = localStorage.getItem('textSelection');

  if (highlight) {
    //I am stumped here I have tried
    //CreateRange() but nothing works
  }
}
