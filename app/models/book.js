import Model, { attr } from '@ember-data/model';

export default class BookModel extends Model {
  @attr('string') name;
  @attr('string') author;
  @attr('number') number;
  @attr('string') description;
  @attr('array') tags;
  @attr('string') cover;
  @attr('number') rate;
}
