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

  addNewTask(newTask: any) {
    this.newTask = newTask;
    console.log(newTask.isImp);
    if (newTask.isImp) {
      this.impTask.push(newTask);

      this.lStorage.setItem('impTask', JSON.stringify(this.impTask));
      this.impTask = JSON.parse(this.lStorage.getItem('impTask'));

      console.log(this.impTask);
    } else {
      this.normalTask.push(newTask);
      this.lStorage.setItem('normalTask', JSON.stringify(this.normalTask));
      this.normalTask = JSON.parse(this.lStorage.getItem('normalTask'));

      console.log(this.normalTask);
    }
  }
}
