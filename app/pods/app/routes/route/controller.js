import Ember from 'ember';
const { Controller } = Ember;

export default Controller.extend({
  actions: {
    editRoute(type){
      this.set('editForm',type);
    },
    saveForm(model){
      model.save();
      this.set('editForm',null);
    },
    closeForm(model){
      model.rollbackAttributes();
      this.set('editForm',null);
    }
  }
});
