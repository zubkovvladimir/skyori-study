import Route from '@ember/routing/route';
import BookModel from '../models/book';

export default class CreateBookRoute extends Route {
    model() {
        return new BookModel();
    }
}
