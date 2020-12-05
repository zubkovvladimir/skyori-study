import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SpeakerFormComponent extends Component {
  @tracked firstName;
  @tracked lastName;
  @tracked patronymic;

  @action
  async saveSpeaker(evt) {
    evt.preventDefault();

    this.args.onSubmit({
      firstName: this.args.firstName,
      lastName: this.args.lastName,
      patronymic: this.args.patronymic
    });
  }
}
