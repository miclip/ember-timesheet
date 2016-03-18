import Ember from 'ember';
import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  email: DS.attr('string'),
  name: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),
  deleted: DS.attr('boolean', {defaultValue:false}),
  deletedDate: DS.attr('date'),
  createdDate: DS.attr('date', {defaultValue:moment(new Date()).utc()}),
  timezone :DS.attr('string'),
  displayName: Ember.computed('name', 'email', function() {
  	var name = this.get('name');
    return (name != null) ? name : this.get('email');
  })
});
