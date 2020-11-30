import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CreateBookController extends Controller {
    @service dataService;
  
    @action
    async saveBook(evt) {
      evt.preventDefault();
  
      await this.dataService.createBook(this.model);
  
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

    reset() {
        controller.name = '';
        controller.author = '';
        controller.features.number = '';
        controller.features.description = '';
    }
}
