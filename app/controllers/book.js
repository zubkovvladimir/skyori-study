import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class BookController extends Controller {
    @service dataService;
    queryParams = ['search', 'searchByTag'];

    @tracked search = '';
    @tracked isLoading;
    @tracked searchByTag ='';

    @action
    async deleteBook(id) {
        await this.dataService.deleteBook(id);
    }

}
