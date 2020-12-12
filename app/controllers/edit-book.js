import Controller from '@ember/controller';
import { action } from '@ember/object';
import { assign } from '@ember/polyfills';

export default class EditBookController extends Controller {
  @action
  async saveBook(book) {
    try {
      assign(this.model, book);
      await this.model.save();

      this.transitionToRoute('book');
    }
    catch(e) {
      this.send('error', e)
    }
  }
}
