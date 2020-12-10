import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class CreateBookController extends Controller {
  @service dataService;
  @tracked tags;

  @action
  async saveBook(book) {
    try {
      book.cover = book.cover ? book.cover : "book-cover.jpg";

      let newBook = this.store.createRecord('book', book);
      await newBook.save();

      this.transitionToRoute('book');
    }
    catch(e) {
      this.send('error', e)
    }
  }
}
