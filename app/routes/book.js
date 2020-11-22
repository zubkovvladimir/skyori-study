import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class BookRoute extends Route {
    @service dataService;
    queryParams = {
        search: {
            refreshModel: true
        }
    }

    async model( { search } ) {
        return this.dataService.getBooks(search);
    }

    @action
    loading() {
        return false;
    }
}
