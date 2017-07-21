import DS from 'ember-data';

export default DS.Adapter.extend({
  faststack:Ember.inject.service(),
  generateIdForRecord(store, inputProperties) {
    return uuid();
  },
  findAll(store, type){
    return this.get('faststack.backend')[type.modelName];
  },
  findRecord(store, type, id) {
    return this.get('faststack.backend')[type.modelName].filterBy('id',id)[0];
  },
  createRecord(store, type, snapshot) {
    let data = this.serialize(snapshot, { includeId: true});
    this.get('faststack.backend')[type.modelName].pushObject(data);
    return this.get('faststack').save().then(()=>{
      return data;
    })
  },
  updateRecord(store, type, snapshot) {
    let data = this.serialize(snapshot, { includeId: true });
    var old = this.get('faststack.backend')[type.modelName].filterBy('id',data.id)[0];
    this.get('faststack.backend')[type.modelName].removeObject(old);
    this.get('faststack.backend')[type.modelName].pushObject(data);
    return this.get('faststack').save().then(()=>{
      return data;
    })
  }
});
