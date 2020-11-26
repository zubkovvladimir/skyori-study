import Model, { attr } from '@ember-data/model';

export default class BookModel extends Model {
    @attr('string') name;
    @attr('number') number;
    @attr('number') rate;
    @attr('string') tags;
    @attr('string') cover;
    @attr('string') author;
    @attr('string') description;
}
