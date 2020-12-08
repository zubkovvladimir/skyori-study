import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class EditBookController extends Controller {
  @service dataService;
  @tracked tags = [];

  @action
  async saveBook(book) {
    let bookToSave = Object.assign({}, book);
    bookToSave.id = this.model.id;
    try {
      await this.dataService.changeBook(bookToSave);

      this.transitionToRoute('book');
    }
    catch(e) {
      this.send('error', e)
    }
  }
}
