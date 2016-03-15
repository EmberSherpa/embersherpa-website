import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('training');
  this.route('free-pairing');
  this.route('faq');
  this.route('contact');
  this.route('global-ember-meetup');
});

export default Router;
