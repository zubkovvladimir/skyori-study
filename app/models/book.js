import Model from '@ember-data/model';
import { tracked } from '@glimmer/tracking';

export default class BookModel extends Model {
  @tracked name = '';
  @tracked author = '';
  @tracked number = '';
  @tracked description = '';
  @tracked tags = [];
}
