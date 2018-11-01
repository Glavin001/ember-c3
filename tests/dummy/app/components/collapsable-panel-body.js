import Component from "@ember/component";
import layout from "../templates/components/collapsable-panel-body";

export default Component.extend({
  layout,
  classNames: ["card-body border-bottom"],
  classNameBindings: ["h0"],
  h0: true,

  didReceiveAttrs() {
    this.set("h0", !this.isOpen)
  },
});
