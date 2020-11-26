import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { later } from '@ember/runloop';

export default class BookRoute extends Route {
    @service dataService;
    queryParams = {
        search: {
            refreshModel: true
        },
        searchByTag:{
            refreshModel: true
        }
    }

    async model( { search, searchByTag } ) {
        if(search) {
            return this.store.query("book", { q: search });
        }

        return this.store.findAll("book");
    }

    setupController(controller, model) {
        super.setupController(...arguments);

        controller.isLoading = true;
    }

    @action
    loading() {
        return false;
    }
}