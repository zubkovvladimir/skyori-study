import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class EditBookController extends Controller {
  @service dataService;
  @tracked tags = [];

  @action
  async saveBook(book) {
    let bookToSave = Object.assign({}, book);
    bookToSave.id = this.model.id;
    try {
      await this.dataService.changeBook(bookToSave);

      this.transitionToRoute('book');
    }
    catch(e) {
      this.send('error', e)
    }
  }

  @action
  changeTags(newTags) {
    this.model.tags = [...newTags];
  }

  @action
  change() {
    this.model.tags = [];
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
    this.model.number = number;
  }

  @action
  changeDescription(description) {
    this.model.description = description;
  }
}
