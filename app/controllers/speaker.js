import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SpeakerController extends Controller {
    @service dataService;
    @tracked isLoading;
  
    @action
    async deleteSpeaker(id) {
        await this.dataService.deleteSpeaker(id);
    }
}
