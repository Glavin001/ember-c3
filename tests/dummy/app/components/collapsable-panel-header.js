import classic from 'ember-classic-decorator';
import { classNames } from '@ember-decorators/component';
import Component from "@ember/component";

@classic
@classNames("card-header bg-white")
export default class CollapsablePanelHeader extends Component {}
