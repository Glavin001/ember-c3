import classic from 'ember-classic-decorator';
import { action } from '@ember/object';
import { classNames } from '@ember-decorators/component';
import Component from "@ember/component";

@classic
@classNames("card mt-2")
export default class CollapsablePanel extends Component {
  isOpen = false;

  @action
  toggle() {
    this.toggleProperty("isOpen");
  }
}
