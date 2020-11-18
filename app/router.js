import EmberRouter from '@ember/routing/router';
import config from 'sky/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('book', { path: '/books'});
  this.route('speaker', { path: '/speakers'});
  this.route('edit-book', { path: '/books/edit/:id'});
  this.route('edit-speaker', { path: '/speakers/edit/:id'});
  this.route('create-book', { path: '/book/new'});
  this.route('create-speaker', { path: '/speakers/new'});
});
