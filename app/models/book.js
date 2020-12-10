import Model, { attr } from '@ember-data/model';

export default class BookModel extends Model {
  @attr('string') name;
  @attr('string') author;
  @attr('string') number;
  @attr('string') description;
  @attr('string') tags;
}
