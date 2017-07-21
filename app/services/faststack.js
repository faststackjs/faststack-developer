import Ember from 'ember';
import filesystem from 'faststack-developer/mixins/filesystem';

export default Ember.Service.extend(filesystem,{
  backend:null,
  path:null,
  load(url){
    this.set('path',url);
    return new Promise((resolve,reject)=>{
      this.findFile(url+'/faststack.json').then(file => {
        this.set('backend',file)
        resolve(file)
      }).catch(reject);
    })
  },
  save(){
    return this.writeFile(this.get('path')+'/faststack.json', this.get('backend'));
  },
  unload(){
    this.set('backend',null);
    this.set('path',null);
  }
});
