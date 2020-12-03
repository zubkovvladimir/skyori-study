import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EditSpeakerController extends Controller {
  @service dataService;

  @action
  async changeSpeaker(evt) {
    evt.preventDefault();

    await this.dataService.changeSpeaker(this.model);

    this.transitionToRoute('speaker');
  }

  @action
  changeLastName(lastName) {
    this.model.lastName = lastName;
  }

  @action
  changeFirstName(firstName) {
    this.model.firstName = firstName;
  }

  @action
  changePatronymic(patronymic) {
    this.model.patronymic = patronymic;
  }
}
