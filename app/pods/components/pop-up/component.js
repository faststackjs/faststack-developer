import Ember from 'ember';

export default Ember.Component.extend({
  classNames:['model'],
  actions: {
    save(){
      this.sendAction('save')
    },
    close(){
      this.sendAction('close')
    }
  }
});
