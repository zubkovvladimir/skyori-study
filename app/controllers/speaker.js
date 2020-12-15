import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SpeakerController extends Controller {
    queryParams = ['search'];

    @tracked search = '';
    @tracked isLoading;

    @action
    async deleteSpeaker(id) {
      try {
        let deletedSpeaker = this.store.peekRecord('speaker', id);
        await deletedSpeaker.destroyRecord();
      }
      catch(e) {
        this.send('error', e)
      }
    }
}
