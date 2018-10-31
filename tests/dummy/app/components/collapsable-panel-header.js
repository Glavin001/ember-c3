import Component from "@ember/component";
import layout from "../templates/components/collapsable-panel-header";

export default Component.extend({
  layout,
  classNames: ["card-header bg-white"],

  click() {
    this.get("on-click")();
  }
});
