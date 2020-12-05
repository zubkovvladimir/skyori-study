import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EditSpeakerController extends Controller {
  @service dataService;

  @action
  async saveSpeaker(speaker) {
    let speakerToSave = Object.assign({}, speaker);
    speakerToSave.id = this.model.id;
    await this.dataService.changeSpeaker(speakerToSave);

    this.transitionToRoute('speaker');
  }
}
