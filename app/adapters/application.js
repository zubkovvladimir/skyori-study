import JSONAPIAdapter from '@ember-data/adapter/json-api';
import config from 'sky/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = config.APP.backEndURL;
  headers = {
    'Content-Type': 'application/json'
  };

  buildURL(modelName, id, snapshot, requestType, query) {
    let url = super.buildURL(...arguments);
    if (modelName === 'meeting' && requestType === 'findAll') {
      console.log("sdfsd")
      url += '?_embed=reports';
    }

    return url;
  }
}
