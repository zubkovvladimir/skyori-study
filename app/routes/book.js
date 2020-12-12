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
      let promise;

      if(search) {
        promise = new Promise ((resolve) => {
        later(() => {
            resolve(this.store.query('book', { q: search }));
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
      }else if(searchByTag) {
        promise = new Promise ((resolve) => {
        later(() => {
            resolve(this.store.query('book', { tags_like: searchByTag }));
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

      promise = new Promise ((resolve) => {
        later(() => {
            resolve(this.store.findAll('book'));
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

    setupController(controller, model) {
        super.setupController(...arguments);

        controller.isError = false;
        controller.isLoading = true;
    }

    @action
    loading() {
        return false;
    }
}
