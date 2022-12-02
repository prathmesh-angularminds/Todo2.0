import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoserviceService {
  lStorage: any = localStorage;
  newTask: object;
  normalTask: object[];
  impTask: object[];
  completedTask: object[];
  deletedTask: object[];

  

  constructor() {
    if (this.lStorage.getItem('normalTask') === null) {
      this.lStorage.setItem('normalTask', JSON.stringify([]));
      this.normalTask = JSON.parse(this.lStorage.getItem('normalTask'));
    } else {
      this.normalTask = JSON.parse(this.lStorage.getItem('normalTask'));
    }

    if (this.lStorage.getItem('impTask') === null) {
      this.lStorage.setItem('impTask', JSON.stringify([]));
      this.impTask = JSON.parse(this.lStorage.getItem('impTask'));
    } else {
      this.impTask = JSON.parse(this.lStorage.getItem('impTask'));
    }

    if (this.lStorage.getItem('completedTask') === null) {
      this.lStorage.setItem('completedTask', JSON.stringify([]));
      this.completedTask = JSON.parse(this.lStorage.getItem('completedTask'));
    } else {
      this.completedTask = JSON.parse(this.lStorage.getItem('completedTask'));
    }

    if (this.lStorage.getItem('deletedTask') === null) {
      this.lStorage.setItem('deletedTask', JSON.stringify([]));
      this.deletedTask = JSON.parse(this.lStorage.getItem('deletedTask'));
    } else {
      this.deletedTask = JSON.parse(this.lStorage.getItem('deletedTask'));
    }
  }

  sortData(task: any[],newTask: any) {

    var demo: (any)[] = [];
    var hrs1: number;
    var hrs2: number;

    if(task.length === 0) {
      task.push(newTask);
    } else {

      for(var i = 0; i < task.length; i++) {
        var demoTask = task[i];
        hrs1 = parseInt(demoTask.startTime.charAt(0) + "" +demoTask.startTime.charAt(0))
        hrs2 = parseInt(newTask.startTime.charAt(0) + "" +newTask.startTime.charAt(0)) 
        
        if(hrs1 > hrs2) {
          demoTask.push(task)  
        }

      }
    }
  }

  addNewTask(newTask: any) {
    this.newTask = newTask;
    console.log(newTask.isImp);
    
    if (newTask.isImp) {
      //this.sortData(this.impTask,newTask);
      this.impTask.push(newTask);

      this.lStorage.setItem('impTask', JSON.stringify(this.impTask));
      this.impTask = JSON.parse(this.lStorage.getItem('impTask'));

      console.log(this.impTask);
    } else {
      //this.sortData(this.impTask,newTask);
      this.normalTask.push(newTask);
      this.lStorage.setItem('normalTask', JSON.stringify(this.normalTask));
      this.normalTask = JSON.parse(this.lStorage.getItem('normalTask'));

      console.log(this.normalTask);
    }
  }

  deleteTask(task: (object)[],arrayType: string) {
    
    if(arrayType === "delete") {
      this.lStorage.setItem('impTask',JSON.stringify(task));
      this.impTask = JSON.parse(this.lStorage.getItem('impTask'));
    }
  }

  allTaskDelete(arrayType: string) {

    if(arrayType === "delete") {
      this.lStorage.setItem('impTask',JSON.stringify([]));
      this.impTask = JSON.parse(this.lStorage.getItem('impTask'));
    }

  }
}
