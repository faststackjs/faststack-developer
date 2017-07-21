import Ember from 'ember';
const { Controller } = Ember;
const { remote, BrowserWindow } = requireNode('electron')
const currentWindow = remote.getCurrentWindow()
import filesystem from 'faststack-developer/mixins/filesystem';


export default Controller.extend(filesystem,{
  projectForm:null,
  createProject(path,name){
    var faststack = { routes:[], models:[],layers:[],packages:[],roles:[],connection:[],name:name,version:'0.0.1'};
    return this.createDir(path).then(()=>{
      return this.writeFile(path+'/faststack.json',faststack);
    });
  },
  isValidProject(path){
    return this.findFile(path+'/faststack.json');
  },
  actions: {
    editProject(project){
      this.set('messages',null);
      this.set('projectForm',project);
    },
    createProject(newProject){
      this.set('messages',null);
      var project = this.store.createRecord('project');
      project.set('id',null);
      this.set('projectForm',project);
      if (newProject) {
        this.set('projectForm.new',true);
      }
    },
    saveProject(project){
      this.set('messages',null);
      if (!project.id) {
        this.set('messages','Please select directory for your project');
        return;
      }
      if (project.get('new')) {
        if (!project.get('name')) {
          this.set('messages','Project name is required.');
          return;
        }
        project.set('id',project.get("id") +'/'+ project.get('name'));
        this.createProject(project.get('id'), project.get('name')).then(()=>{
          project.save();
          this.set('projectForm',null);
        })
      }else{
        this.isValidProject(project.get('id')).then((data)=>{
          project.set('name',data.name);
          project.save();
          this.set('projectForm',null);
        }).catch(error=>{
          this.set('messages','This directory is not valid');
        })
      }
    },
    closeProject(){
      this.set('messages',null);
      this.get('projectForm').rollbackAttributes();
      this.set('projectForm',null);
    },
    selectDirectory(project){
      var path =  remote.dialog.showOpenDialog(currentWindow,{
        properties: ['openDirectory']
      });
      if (path) {
        project.set('id',path[0]);
      }
    },
    deleteProject(project){
      project.destroyRecord();
      this.set('projectForm',null);
    }
  }
});
