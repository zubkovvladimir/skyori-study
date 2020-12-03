import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CreateSpeakerController extends Controller {
    @service dataService;

    @action
    async saveSpeaker(evt) {
      evt.preventDefault();

      await this.dataService.createSpeaker(this.model);

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

    reset() {
        controller.lastName = '';
        controller.firstName = '';
        controller.patronymic = '';
    }
}
