import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { later } from '@ember/runloop';

export default class SpeakerRoute extends Route {
    queryParams = {
        search: {
            refreshModel: true
        }
    }

    async model( { search } ) {        
        if (search) {
            return this.store.query('speaker', { q: search });
          }

        return this.store.findAll("speaker");
    }

    setupController(controller, model) {
        super.setupController(...arguments);
    }

    @action
    loading() {
        return false;
    }
}
