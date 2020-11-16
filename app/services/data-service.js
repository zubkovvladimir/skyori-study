import Service from '@ember/service';
import config from 'sky/config/environment';

export default class DataServiceService extends Service {
    async getData() {
        let response = await fetch(`${config.APP.backEndURL}/books`);
        return response.json();
    }

    async getBook(id) {
        let response = await fetch(`${config.APP.backEndURL}/books/${id}`);
        return response.json();
    }
}
