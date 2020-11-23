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
        let promise = new Promise ((resolve, reject) => {
            later(() => {
                resolve(this.dataService.getBooks(search, searchByTag));
            }, 1000);            
            }).then((data) => {
                this.controller.model = data;            
            }).finally(() => {
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

        controller.isLoading = true;
    }

    @action
    loading() {
        return false;
    }
}