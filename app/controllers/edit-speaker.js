import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EditSpeakerController extends Controller {


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
