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

    reset() {
        controller.name.lastName = '';
        controller.name.firstName = '';
        controller.name.patronymic = '';
    }
}
