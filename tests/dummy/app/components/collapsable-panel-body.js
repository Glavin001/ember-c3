import classic from 'ember-classic-decorator';
import { classNames, classNameBindings } from '@ember-decorators/component';
import Component from "@ember/component";

@classic
@classNames("card-body border-bottom")
@classNameBindings("h0")
export default class CollapsablePanelBody extends Component {
  h0 = true;

  didReceiveAttrs() {
    this.set("h0", !this.isOpen)
  }
}
