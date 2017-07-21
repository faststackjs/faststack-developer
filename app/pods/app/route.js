import Ember from 'ember';

export default Ember.Route.extend({
  faststack:Ember.inject.service(),
  beforeModel(){
    this.get('faststack').unload();
  },
  model(params){
    return this.get('faststack').load(params.app_id);
  }
});
