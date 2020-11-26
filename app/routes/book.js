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

        return this.store.findAll("book");
    }

    setupController(controller, model) {
        super.setupController(...arguments);
    }

    @action
    loading() {
        return false;
    }
}