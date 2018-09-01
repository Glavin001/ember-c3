import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { bind } from '@ember/runloop';

export default Controller.extend({
  message: null,
  hover: null,

  data: computed('model', function () {
    return {
      columns: this.get('model'),
      type: 'bar',
      types: {
        data3: 'spline',
        data4: 'line',
      },
      groups: [
        ['data1', 'data2']
      ],

      // https://balinterdi.com/blog/ember-dot-run-dot-bind/
      onclick: bind(this, this.get('actions.myClick')),
      onmouseover: bind(this, this.get('actions.myMouseover'))
    }
  }),

  actions: {
    myClick(d, i) {
      this.set('message', `${d.name}, value: ${d.value}`);
      if (d.name == 'data5')
        alert(`Data 5 - you're a winner`);
    },

    myMouseover(d, i) {
      this.set('hover', `${d.name}, value: ${d.value}`);
    }
  }
});
