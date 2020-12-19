import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MeetingController extends Controller {
  @tracked isLoading;

  @action
  searchSpeaker(query) {
    return this.store.query('speaker', { q: query })
  }

  @action
  searchBook(query) {
    return this.store.query('book', { q: query })
  }

  @action
  searchBookClick(query) {
    return this.store.query('meeting', { q: query })
  }
}
