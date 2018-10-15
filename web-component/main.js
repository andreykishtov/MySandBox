{
  /* <render-collapsible header="Collapse me!">
	<ul content>
		<li>Components are awesome!</li>
		<li>They drive the web</li>
	</ul>
</render-collapsible> */
}

window.customElements.define(
  'collapse-me',

  class extends HTMLElement {
    constructor(props) {
      super(props);
      this.init();
    }

    init() {
      this.root = this.attachShadow({ mode: 'open' });
      this.renderElement();
    }

    renderElement(elementName) {
      const collapsible = document.createElement('div');
      var text = document.createTextNode('Collapse me!');
      collapsible.appendChild(text);
      collapsible.onclick = () => this.whenClicked();
      this.createList('Components are awesome!', 'They drive the web');
      this.root.appendChild(collapsible);
    }

    whenClicked() {
      this.onShowHide()
    }

    onShowHide() {
      if (this.root.children[0].style.display === 'none') {
        this.root.children[0].style.display = 'block';
      } else {
        this.root.children[0].style.display = 'none';
      }
    }

    createList(text1, text2) {
      var ul = document.createElement('ul');
      var li = document.createElement('li');
      var li2 = document.createElement('li');
      var t1 = document.createTextNode(text1);
      var t2 = document.createTextNode(text2);
      li.innerHTML = li.innerHTML + text1;
      li2.innerHTML = li.innerHTML + text2;
      ul.appendChild(li);
      ul.appendChild(li2);
      this.root.appendChild(ul);
    }
  }
);
