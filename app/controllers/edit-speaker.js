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
    this.model.name.lastName = lastName;
  }

  @action
  changeFirstName(firstName) {
    this.model.name.firstName = firstName;
  }

  @action
  changePatronymic(patronymic) {
    this.model.name.patronymic = patronymic;
  }
}