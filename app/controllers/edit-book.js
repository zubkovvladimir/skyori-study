import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';  
import { inject as service } from '@ember/service';

export default class EditBookController extends Controller {
  @service dataService;
  @tracked tags = [];

  @action
  async changeBook(evt) {
    evt.preventDefault();

    await this.dataService.changeBook(this.model);

    this.transitionToRoute('book');
  }

  @action
  changeTags(newTags) {
    this.model.features.tags = [...newTags];
    console.log(this.model.features.tags);
  }

  @action
  change() {
    this.model.features.tags = [];
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
