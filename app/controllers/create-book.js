import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class CreateBookController extends Controller {
    @service dataService;
    @tracked tags = [];

    @action
    async saveBook(evt) {
      evt.preventDefault();
      console.log(this.model);
      await this.dataService.createBook(this.model);

      this.transitionToRoute('book');
    }

    @action
    changeTags(newTags) {
      this.model.tags = [...newTags];
      console.log(this.model.tags);
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

    reset() {
        controller.name = '';
        controller.author = '';
        controller.number = '';
        controller.description = '';
    }
}
