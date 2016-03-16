import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
        this.route('register' , { path: '/register' });
        this.route('login', { path: '/login' });
        this.route('reset', { path: '/reset' });
        this.route('account', { resetNamespace: true }, function () {
            this.route('password');
            this.route('manage');
            this.route('delete');
        });
});

export default Router;
