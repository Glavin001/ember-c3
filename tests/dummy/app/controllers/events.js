import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { bind } from "@ember/runloop";
/* eslint ember/avoid-leaking-state-in-ember-objects: "off" */

export default Controller.extend({
  message: null,
  hover: null,
  chart: null,
  legendVisible: true,
  lbuttonText: "Hide Legend",
  
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
      onclick: bind(this, this.get("actions.myClick")),
      onmouseover: bind(this, this.get("actions.myMouseover"))
    };
  }),

  padding: { top: 20 },

  title: { text: "Click data 5 to Win!" },

  actions: {
    myClick(d /* i */) {
      this.set("message", `${d.name}, value: ${d.value}`);
      if (d.name == "data5") alert(`Data 5 - you're a winner`);
    },

    myMouseover(d /* i */) {
      this.set("hover", `${d.name}, value: ${d.value}`);
    },
    
    toggleLegend() {
      let c = this.get("chart");
      this.toggleProperty('legendVisible');
      let v= this.get("legendVisible");
      let t = v ? "Hide Legend" : "Show Legend";
      this.set("lbuttonText", t);

      if (v) c.legend.show();
       else c.legend.hide();
    }
  }
});
