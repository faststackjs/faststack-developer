import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('app',{path:'/app/:app_id'}, function() {
    this.route('routes', {path:'/routes'} ,function() {
      this.route('route',{path:'/:route_id'});
    });
    this.route('layers');
    this.route('models');
    this.route('access');
    this.route('settings');
    this.route('views');
    this.route('connections');
  });
});

export default Router;
