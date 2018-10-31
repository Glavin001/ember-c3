import Controller from "@ember/controller";

export default Controller.extend({

  chart: null,
  legendVisible: true,
  lbuttonText: "Hide Legend",

  // Data source in route index.js

  actions: {
    toggleLegend() {
      let c = this.get("chart");
      this.toggleProperty("legendVisible");
      let v= this.get("legendVisible");
      let t = v ? "Hide Legend" : "Show Legend";
      this.set("lbuttonText", t);

      if (v) c.legend.show();
       else c.legend.hide();
    }
  }
});
