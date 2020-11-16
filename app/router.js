import EmberRouter from '@ember/routing/router';
import config from 'sky/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('books', function() {
    this.route('detail', { path: '/:id'});
  });
});
