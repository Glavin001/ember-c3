import classic from 'ember-classic-decorator';
import Controller from '@ember/controller';
import config from "../config/environment";

@classic
export default class ApplicationController extends Controller {
  appVersion = config.APP.appVersion;
}
