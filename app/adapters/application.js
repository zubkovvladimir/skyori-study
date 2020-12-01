import JSONAPIAdapter from '@ember-data/adapter/json-api';
import config from 'sky/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
    host = config.APP.backEndURL;
    headers = {
        'Content-Type': 'application/json'
      }
}
