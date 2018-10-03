Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app = new Vue({
  el: '#app',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ],
    message: 'Hello Vue! 1',
    seen: true,
    todos: [{ text: 'Learn JavaScript' }, { text: 'Learn Vue' }, { text: 'Build something awesome' }]
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split('')
        .reverse()
        .join('');
    }
  }
});

app.message = 'new message';
// app.seen = false;
app.todos.push({ text: 'just for fun' });
