import Route from "@ember/routing/route";

export default Route.extend({

  setupController(controller, model) {
    this._super(controller, model);

    controller.set("legendVisible", true);
    controller.set("graphVisible", true);
    controller.set("isBar", false);
    controller.set("isStacked", false);
  },
});
