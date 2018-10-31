import Component from "@ember/component";
import layout from "../templates/components/collapsable-panel";

export default Component.extend({
  isOpen: false,
  layout,
  classNames: ["card mt-2"],

  actions: {
    toggle() {
      this.toggleProperty("isOpen");
    }
  }
});
