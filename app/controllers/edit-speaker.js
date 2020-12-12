import Controller from '@ember/controller';
import { action } from '@ember/object';
import { assign } from '@ember/polyfills';

export default class EditSpeakerController extends Controller {
  @action
  async saveSpeaker(speaker) {
    try {
      assign(this.model, speaker);
      await this.model.save();

      this.transitionToRoute('speaker');
    }
    catch(e) {
      this.send('error', e)
    }
  }
}
