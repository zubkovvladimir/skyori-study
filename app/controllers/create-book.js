import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CreateBookController extends Controller {
    @tracked tags = [];
  
    @action
    async saveBook(book) {
      try {
        let newAuthor =  this.store.createRecord('book', book);
        await newAuthor.save();
    
        this.transitionToRoute('book');
      }
      catch(e) {
        this.send('error', e)
      }
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

    reset() {
        controller.name = '';
        controller.author = '';
        controller.features.number = '';
        controller.features.description = '';
    }
}
