$(document).ready(() => {
  const widget = new Widget();
  widget.createWidget();
});

const mainDivCss = {
  border: '1px solid black',
  width: '400px',
  height: '400px',
  position: 'absolute',
  top: 15,
  left: 15,
  display: 'grid'
};

class Widget {
  constructor(props) {
    this.div = $('<div />').appendTo('body');
    this.div.attr('id', 'widget');
    this.div.css(mainDivCss);
  }

  createWidget() {
    this.createLayout();
    this.createEvents();
  }

  createLayout() {
    $('<p />');
    $('<input />');
    $('<input />');
    $('<input />');
    $('<button />');
    $('<button />');
    $('<button />');
  }

  createEvents() {}
}
