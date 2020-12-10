import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CreateSpeakerController extends Controller {
    @service dataService;

    @action
    async saveSpeaker(speaker) {
      try {
        speaker.photo = speaker.photo ? speaker.photo : "speaker.png";

        let newSpeaker = this.store.createRecord('speaker', speaker);
        await newSpeaker.save();

        this.transitionToRoute('speaker');
      }
      catch(e) {
        this.send('error', e)
      }
    }
}
