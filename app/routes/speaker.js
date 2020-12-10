import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
// import { later } from '@ember/runloop';

export default class SpeakerRoute extends Route {
    @service dataService;

    queryParams = {
        search: {
            refreshModel: true
        }
    }

    async model( { search } ) {
        if(search) {
          return this.store.query('speaker', { q: search });
        }

        return this.store.findAll('speaker');
    }

    setupController(controller, model) {
        super.setupController(...arguments);

        // controller.isLoading = true;
        // controller.isError = false;
    }

    @action
    loading() {
        return false;
    }
}
