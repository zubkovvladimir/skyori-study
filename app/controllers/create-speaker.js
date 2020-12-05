import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CreateSpeakerController extends Controller {
    @service dataService;

    @action
    async saveSpeaker(speaker) {
      await this.dataService.createSpeaker(speaker);

      this.transitionToRoute('speaker');
    }
}
