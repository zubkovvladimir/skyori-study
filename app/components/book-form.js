import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BookFormComponent extends Component {
  @tracked _name;
  @tracked _author;
  @tracked _number;
  @tracked _description;
  @tracked tags = [];

  nameArgsPrevValue;
  authorArgsPrevValue;
  numberArgsPrevValue;
  descriptionArgsPrevValue;

  get name() {
    if (this.nameArgsPrevValue !== this.args.name) {
      this._name = this.nameArgsPrevValue = this.args.name;
    }

    return this._name;
  }

  get author() {
    if (this.authorArgsPrevValue !== this.args.author) {
      this._author = this.authorArgsPrevValue = this.args.author;
    }

    return this._author;
  }

  get number() {
    if (this.numberArgsPrevValue !== this.args.number) {
      this._number = this.numberArgsPrevValue = this.args.number;
    }

    return this._number;
  }

  get description() {
    if (this.descriptionArgsPrevValue !== this.args.description) {
      this._description = this.descriptionArgsPrevValue = this.args.description;
    }

    return this._description;
  }

  @action
  async saveBook(evt) {
    evt.preventDefault();

    this.args.onSubmit({
      name: this._name,
      author: this._author,
      number: this._number,
      description: this._description,
      tags: this.tags,
    });
  }

  @action
  changeTags(newTags) {
    this.tags = [...newTags];
  }
}
