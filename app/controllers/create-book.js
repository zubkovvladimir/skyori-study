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
      await this.dataService.createBook(book);

      this.transitionToRoute('book');
    }
    catch(e) {
      this.send('error', e)
    }
  }
}
