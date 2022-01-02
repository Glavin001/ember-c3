import { computed } from '@ember/object';
import Controller from "@ember/controller";
import { bind } from "@ember/runloop";
import { tracked } from '@glimmer/tracking';

export default class EventsController extends Controller {
  @tracked message;
  @tracked hoverMsg;

  padding = this.padding || { top: 20 };
  title = this.title || { text: "Click chickens to win!" };

  @computed
  get data() {
    // iris data from R
    return {
      columns: [
        ["Horses", 30],
        ["Cows", 120],
        ["Sheep", 10],
        ["Pigs", 45],
        ["Chickens", 90]
      ],
      type: "pie",
      onclick: bind(this, this.myClick),

      // override default onmouseover
      onmouseover: bind(this, this.myMouseover)
    };
  }

  myClick(data) {
    this.message =`${data.name}, value: ${data.value}`;
    if (data.name == "data5") alert(`Data 5 - you're a winner`);
  }

  myMouseover(data) {
    this.hoverMsg = `${data.name}, value: ${data.value}`;
  }
}
