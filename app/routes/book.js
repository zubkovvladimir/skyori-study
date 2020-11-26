import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class BookRoute extends Route {
    queryParams = {
        search: {
            refreshModel: true
        },
        searchByTag:{
            refreshModel: true
        }
    }

    async model( { search, searchByTag } ) {
        if (search) {
            return this.store.query('book', { q: search });
          }
        if (searchByTag) {
            return this.store.query('book', { q: searchByTag });
        }

        return this.store.findAll("book");
    }

    @action
    loading() {
        return false;
    }
}