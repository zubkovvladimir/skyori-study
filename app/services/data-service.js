import Service from '@ember/service';
import config from 'sky/config/environment';

export default class DataServiceService extends Service {
    async getBooks() {
        let response = await fetch(`${config.APP.backEndURL}/books`);
        return response.json();
    }

    async getSpeakers() {
        let response = await fetch(`${config.APP.backEndURL}/speakers`);
        return response.json();
    }

    async getBook(id) {
        let response = await fetch(`${config.APP.backEndURL}/books/${id}`);
        return response.json();
    }

    async getSpeaker(id) {
        let response = await fetch(`${config.APP.backEndURL}/speakers/${id}`);
        return response.json();
    }

    changeSpeaker(speaker) {
      return fetch(`${config.APP.backEndURL}/speakers/${speaker.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(speaker)
      });
    }
}