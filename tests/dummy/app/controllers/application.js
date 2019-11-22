import Controller from '@ember/controller';
import config from "../config/environment";

export default class ApplicationController extends Controller {
  appVersion = config.APP.appVersion;
}
