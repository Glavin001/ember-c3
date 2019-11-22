import Route from "@ember/routing/route";

export default class ChartObjRoute extends Route {
  setupController(controller, model) {
    super.setupController(controller, model);

    controller.set("legendVisible", true);
    controller.set("graphVisible", true);
    controller.set("isBar", false);
    controller.set("isStacked", false);
  }
}
