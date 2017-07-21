import Ember from 'ember';
const fs = requireNode('fs');
const mkdirp = requireNode('mkdirp');

export default Ember.Mixin.create({
  //
  // read file
  //
  findFile(path){
    return new Promise((resolve,reject)=>{
      fs.readFile(path,(error,data)=>{
        if (error) {
          reject(error);
        }else{
          resolve(JSON.parse(data));
        }
      })
    })
  },
  //
  // create file
  //
  writeFile(path,newData){
    return new Promise((resolve,reject)=>{
      fs.writeFile(path,JSON.stringify(newData,null,4),(error)=>{
        if (error) {
          reject(error);
        }else{
          resolve(newData);
        }
      })
    })
  },
  //
  // create Directory
  //
  createDir(path){
    return new Promise((resolve,reject)=>{
      mkdirp(path, error =>{
        if (error) reject(error);
        else resolve();
      })
    })
  }
});
