import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SpeakerFormComponent extends Component {
    @tracked firstName = this.args.firstName;
    @tracked lastName = this.args.lastName;
    @tracked patronymic = this.args.patronymic;
  
    @action
    async changeSpeaker(e) {
      e.preventDefault();
  
      this.args.onSubmit({
        firstName: this.firstName,
        lastName: this.lastName,
        patronymic: this.patronymic
      });
    }
}
