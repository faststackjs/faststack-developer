import DS from 'ember-data';

export default DS.Adapter.extend({
  //
  // init
  //
  init() {
    this._super(...arguments);
    this.set('list', (JSON.parse(localStorage.getItem('projects')) || []))
  },
  //
  // find all
  //
  findAll(){
    return {'projects':this.get('list')};
  },
  //
  // find one
  //
  findRecord(store, type, id, snapshot) {
    return ({'projects':this.get('list').filterBy('id',id)[0]} || {});
  },
  //
  // create
  //
  createRecord(store, type, snapshot) {
    let data = this.serialize(snapshot, { includeId: true});
    delete data.new;
    this.get('list').pushObject(data);
    this.save();
    return {'projects':data};
  },
  //
  // delete
  //
  deleteRecord(store, type, snapshot) {
    let data = this.serialize(snapshot, { includeId: true });
    let id = snapshot.id;
    this.get('list').removeObject(this.get('list').filterBy('id',id)[0]);
    this.save();
    return true;
  },
  //
  // update
  //
  updateRecord(store, type, snapshot) {
    let data = this.serialize(snapshot, { includeId: true });
    let id = snapshot.id;
    this.get('list').removeObject(data);
    this.save();
    return {'projects':data};
  },
  //
  // save loacl storage
  //
  save(){
    localStorage.setItem('projects', JSON.stringify(this.get('list')));
  }
});
