import Component from "@ember/component";
import layout from "../templates/components/collapsable-panel-header";

export default Component.extend({
  layout,
  classNames: ["card-header bg-white"],

  // not using expandable header portion
  // click() {
  //   this.on-click();
  // }
});
