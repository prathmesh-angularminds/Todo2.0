import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TodoserviceService { 
  // Local Storage Variables
  lStorage: any = localStorage;
  newTask: object;
  allTask: object[];
  completedTask: object[];
  deletedTask: object[];

  constructor() {

    if (this.lStorage.getItem("allTask") === null) {
      this.lStorage.setItem("allTask", JSON.stringify([]));
      this.allTask = JSON.parse(this.lStorage.getItem("allTask"));
    } else {
      this.allTask = JSON.parse(this.lStorage.getItem("allTask"));
    }

    if (this.lStorage.getItem("completedTask") === null) {
      this.lStorage.setItem("completedTask", JSON.stringify([]));
      this.completedTask = JSON.parse(this.lStorage.getItem("completedTask"));
    } else {
      this.completedTask = JSON.parse(this.lStorage.getItem("completedTask"));
    }

    if (this.lStorage.getItem("deletedTask") === null) {
      this.lStorage.setItem("deletedTask", JSON.stringify([]));
      this.deletedTask = JSON.parse(this.lStorage.getItem("deletedTask"));
    } else {
      this.deletedTask = JSON.parse(this.lStorage.getItem("deletedTask"));
    }
  }

  // Sorting Data
  sortData(taskList: any[], newTask: any) {
    var newTaskList: any[] = [];
    var hrs1: number;
    var hrs2: number;
    var index = -1;
    var mins1: number;
    var mins2: number;
    
    if (taskList.length === 0) {
    newTaskList.push(newTask);
  } else {
    for (var i = 0; i < taskList.length; i++) {

      hrs1 = parseInt(taskList[i].startTime.charAt(0) + taskList[i].startTime.charAt(1));
      hrs2 = parseInt(newTask.startTime.charAt(0) + newTask.startTime.charAt(1));
      mins1 = parseInt(taskList[i].startTime.charAt(3) + taskList[i].startTime.charAt(4));
      mins2 = parseInt(newTask.startTime.charAt(3) + newTask.startTime.charAt(4));

      if (hrs1 > hrs2) {

        newTaskList.push(newTask);
        index = i;
        break;

      } else if(hrs1 < hrs2) {

        newTaskList.push(taskList[i]);
        index = -1;
        continue;
      
      }else if(hrs1 == hrs2) {

         if (mins1 >= mins2) {
           newTaskList.push(newTask);
           index = i;
           break;
         } else {
           newTaskList.push(taskList[i]);
           index = -1;
           continue;
         }
      }

      newTaskList.push(taskList[i]);
    }

    if (index === -1) {
      newTaskList.push(newTask);
    } else {
      for (var i = index; i < taskList.length; i++) {
        newTaskList.push(taskList[i]);
      }
    }
  }

    return newTaskList;
  }

  // add new task in normal list or important list
  addNewTask(newTask: any) {
    
    this.lStorage.setItem("allTask", JSON.stringify(this.sortData(this.allTask,newTask)));
    this.allTask = JSON.parse(this.lStorage.getItem("allTask"));
    console.log(this.allTask)

  }

  // function which deleted specified task from the list
  deleteTask(task: object[], arrayType: string, deletedTask: object[]) {
    if (arrayType === "all") {
      this.lStorage.setItem("allTask", JSON.stringify(task));
      this.allTask = JSON.parse(this.lStorage.getItem("allTask"));
    } else if(arrayType === "completed") {
      this.lStorage.setItem("completedTask", JSON.stringify(task));
      this.completedTask = JSON.parse(this.lStorage.getItem("completedTask"));
    }

    this.deletedTask.push(deletedTask);
    this.lStorage.setItem("deletedTask", JSON.stringify(this.deletedTask));
    this.deletedTask = JSON.parse(this.lStorage.getItem("deletedTask"));
  }

  // Function which deleted all task from specified task list
  allTaskDelete(arrayType: string) {
    if (arrayType === "all") {
      this.lStorage.setItem("allTask", JSON.stringify([]));
      this.allTask = JSON.parse(this.lStorage.getItem("allTask"));

    } else if (arrayType === "delete") {
      this.lStorage.setItem("deletedTask", JSON.stringify([]));
      this.deletedTask = JSON.parse(this.lStorage.getItem("deletedTask"));
    } else if(arrayType === "completed") {
      this.lStorage.setItem("completedTask", JSON.stringify([]));
      this.completedTask = JSON.parse(this.lStorage.getItem("completedTask"));
    }
  }

  addToCompleted(newTask: (object)[]) {
    
    this.completedTask.push(newTask);
    this.lStorage.setItem("completedTask", JSON.stringify(this.completedTask));
    this.completedTask = JSON.parse(this.lStorage.getItem("completedTask"));
  
    console.log(this.completedTask);
  }
}
