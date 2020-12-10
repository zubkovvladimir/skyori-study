import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { later } from '@ember/runloop';

export default class SpeakerRoute extends Route {
    @service dataService;

    queryParams = {
        search: {
            refreshModel: true
        }
    }

    async model( { search } ) {
      let promise;

      if(search) {
        // return this.store.query('speaker', { q: search });
        promise = new Promise ((resolve) => {
        later(() => {
            resolve(this.store.query('speaker', { q: search }));
        }, 1000);
        }).then((data) => {
            this.controller.model = data;
        })
        .catch((e) => {
          this.controller.isError = true;
          this.controller.error = e.message;
        })
        .finally(() => {
            if(promise === this.lastPromise) {
                this.controller.isLoading = false;
            }
        })

        this.lastPromise = promise;
        return {
          isLoading: true
        }
      }

        // return this.store.findAll('speaker');

      promise = new Promise ((resolve) => {
      later(() => {
          resolve(this.store.findAll('speaker'));
      }, 1000);
      }).then((data) => {
          this.controller.model = data;
      })
      .catch((e) => {
        this.controller.isError = true;
        this.controller.error = e.message;
      })
      .finally(() => {
          if(promise === this.lastPromise) {
              this.controller.isLoading = false;
          }
      })

      this.lastPromise = promise;
      return {
        isLoading: true
      }
    }

    setupController(controller) {
        super.setupController(...arguments);

        controller.isLoading = true;
        controller.isError = false;
    }

    @action
    loading() {
        return false;
    }
}
