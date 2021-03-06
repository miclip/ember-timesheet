// app/routes/register.js
import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
		if( this.get("session").currentUser){
 			this.transitionTo('index');
		}
   
  },
 model: function(){
    return this.store.createRecord('user',{});
 },
 deactivate: function(){
			var model = this.get('controller.model');
			if(model.get('isNew')){
				model.deleteRecord();
			}
			
	},

});
