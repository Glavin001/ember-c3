import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { bind } from "@ember/runloop";

export default Controller.extend({
  message: null,
  hoverMsg: null,

  init() {
    this._super(...arguments);
    this.padding = this.padding || { top: 20 };
    this.title = this.title || { text: "Click data 5 to Win!" };
  },

  data: computed(function() {
    // iris data from R
    return {
      columns: [
        ["data1", 30],
        ["data2", 120],
        ["data3", 10],
        ["data4", 45],
        ["data5", 90]
      ],
      type: "pie",
      // https://balinterdi.com/blog/ember-dot-run-dot-bind/
      onclick: bind(this, this.actions.myClick),
      onmouseover: bind(this, this.actions.myMouseover)
    };
  }),

  actions: {
    myClick(d /* i */) {
      this.set("message", `${d.name}, value: ${d.value}`);
      if (d.name == "data5") alert(`Data 5 - you're a winner`);
    },

    myMouseover(d /* i */) {
      this.set("hoverMsg", `${d.name}, value: ${d.value}`);
    }
  }
});
