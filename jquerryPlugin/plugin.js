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
  display: 'grid',
  gridGap: '10px',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateAreas: `
  "Title Title Title"
  "NI ETI STI"
  "Prev  Next  Save"`
};

class Widget {
  constructor(props) {
    this.div = $('<div>').appendTo('body');
    this.div.attr('id', 'widget');
    this.div.css(mainDivCss);
  }

  createWidget() {
    this.createLayout();
    this.createEvents();
  }

  createLayout() {
    $('<p>')
      .css({ gridArea: 'Title' })
      .appendTo(this.div);
    $('<input>')
      .css({ gridArea: 'STI', width: '60px', height: '30px', paddingRight: '5px' })
      .appendTo(this.div);
    $('<input>')
      .css({ gridArea: 'ETI', width: '60px', height: '30px', paddingRight: '5px' })
      .appendTo(this.div);
    $('<input>')
      .css({ gridArea: 'NI', width: '60px', height: '30px', paddingRight: '5px' })
      .appendTo(this.div);
    $('<button>')
      .css({ gridArea: 'Save', width: '60px', height: '30px' })
      .text('Save')
      .appendTo(this.div);
    $('<button>')
      .css({ gridArea: 'Next', width: '60px', height: '30px' })
      .text('Next')
      .appendTo(this.div);
    $('<button>')
      .css({ gridArea: 'Prev', width: '60px', height: '30px' })
      .text('Prev')
      .appendTo(this.div);
  }

  createEvents() {}
}
