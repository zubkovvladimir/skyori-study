import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EditBookController extends Controller {
  @service dataService;

  @action
  async changeBook(evt) {
    evt.preventDefault();

    await this.dataService.changeBook(this.model);

    this.transitionToRoute('book');
  }

  @action
  changeName(name) {
    this.model.name = name;
  }

  @action
  changeAuthor(author) {
    this.model.author = author;
  }

  @action
  changeNumber(number) {
    this.model.features.number = number;
  }

  @action
  changeDescription(description) {
    this.model.features.description = description;
  }
}
