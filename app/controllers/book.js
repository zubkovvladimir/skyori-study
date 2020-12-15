import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BookController extends Controller {
    queryParams = ['search', 'searchByTag'];

    @tracked search = '';
    @tracked isLoading;
    @tracked searchByTag ='';

    @action
    async deleteBook(id) {
      try {
        let deleteBook = this.store.peekRecord('book', id);
        await deleteBook.destroyRecord();
      }
      catch(e) {
        this.send('error', e)
      }
    }

}
