import Ember from 'ember';
const { Controller } = Ember;

export default Controller.extend({
  routeForm:null,
  actions: {
    createRoute(){
      this.set('routeForm',this.store.createRecord('routes'));
    },
    save(route){
      route.save();
      this.set('routeForm',null);
    },
    close(route){
      route.rollbackAttributes();
      this.set('routeForm',null);
    },
    editRoute(route){
      this.set('routeForm',route);
    },
    delete(route){
      route.destroyRecord();
      this.set('routeForm',null);
    }
  }
});
