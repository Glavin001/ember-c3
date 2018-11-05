import Controller from '@ember/controller';
import config from "../config/environment";

export default Controller.extend({
  appVersion: config.APP.appVersion,
});
