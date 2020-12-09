import Service from '@ember/service';
import config from 'sky/config/environment';

export default class DataServiceService extends Service {
    async getBooks(searchValue, searchByTagName) {
      let searchSegm = searchValue ? `?q=${searchValue}` : (searchByTagName? `?tags_like=${searchByTagName}` : '');
      let response = await fetch(`${config.APP.backEndURL}/books${searchSegm}`);
      return response.json();
    }

    async getSpeakers(searchValue) {
      let searchSegm = searchValue ? `?q=${searchValue}` : '';
      let response = await fetch(`${config.APP.backEndURL}/speakers${searchSegm}`);
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

    changeBook(book) {
      return fetch(`${config.APP.backEndURL}/books/${book.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
      });
    }

    createBook(book) {
      book.cover = book.cover ? book.cover : "book-cover.jpg";
      return fetch(`${config.APP.backEndURL}/books`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
      });
    }

    createSpeaker(speaker) {
      speaker.photo = speaker.photo ? speaker.photo : "speaker.png";
      return fetch(`${config.APP.backEndURL}/speakers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(speaker)
      });
    }

    deleteSpeaker(id) {
      return fetch(`${config.APP.backEndURL}/speakers/${id}`, {
        method: 'DELETE'
      });
    }

    deleteBook(id) {
      return fetch(`${config.APP.backEndURL}/books/${id}`, {
        method: 'DELETE'
      });
    }
}
