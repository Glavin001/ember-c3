import { computed } from '@ember/object';
import Controller from "@ember/controller";
import { bind } from "@ember/runloop";

export default class EventsController extends Controller {
  message = null;
  hoverMsg = null;

  padding = this.padding || { top: 20 };
  title = this.title || { text: "Click data 5 to Win!" };

  @computed
  get data() {
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
      onclick: bind(this, this.myClick),
      onmouseover: bind(this, this.myMouseover)
    };
  }

  myClick(d) {
    this.set("message", `${d.name}, value: ${d.value}`);
    if (d.name == "data5") alert(`Data 5 - you're a winner`);
  }

  myMouseover(d) {
    this.set("hoverMsg", `${d.name}, value: ${d.value}`);
  }
}
