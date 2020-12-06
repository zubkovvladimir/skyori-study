import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SpeakerFormComponent extends Component {
  @tracked _firstName;
  @tracked _lastName;
  @tracked _patronymic;

  firstNameArgsPrevValue;
  lastNameArgsPrevValue;
  patronymicArgsPrevValue;

  get firstName() {
    if (this.firstNameArgsPrevValue !== this.args.firstName) {
      this._firstName = this.firstNameArgsPrevValue = this.args.firstName;
    }

    return this._firstName;
  }

  get lastName() {
    if (this.lastNameArgsPrevValue !== this.args.lastName) {
      this._lastName = this.lastNameArgsPrevValue = this.args.lastName;
    }

    return this._lastName;
  }

  get patronymic() {
    if (this.patronymicArgsPrevValue !== this.args.patronymic) {
      this._patronymic = this.patronymicArgsPrevValue = this.args.patronymic;
    }

    return this._patronymic;
  }

  @action
  async saveSpeaker(evt) {
    evt.preventDefault();

    this.args.onSubmit({
      firstName: this._firstName,
      lastName: this._lastName,
      patronymic: this._patronymic
    });
  }
}
