import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from 'src/app/services/todoservice.service';

@Component({
  selector: 'app-complete-task',
  templateUrl: './complete-task.component.html',
  styleUrls: ['./complete-task.component.scss']
})
export class CompleteTaskComponent implements OnInit {

  compTask: (any)[];
  constructor(private service: TodoserviceService) { 
    this.compTask = service.completedTask;
  }

  ngOnInit(): void {
  }

  // form showing option div on page
  showOption(index: number) {

    for(var i = 0; i < this.compTask.length; i++) {

      if(index !== i)
        this.compTask[i].optionBtn = false;
    }
    
    this.compTask[index].optionBtn = !this.compTask[index].optionBtn;
  }

  deleteAll() {

    this.compTask = [];
    this.service.allTaskDelete("completed");
  }

  onTaskUpdate(index: number) {
    
    this.compTask[index].optionBtn = false;
    this.compTask.splice(index,1);
    this.service.lStorage.setItem("completedTask",JSON.stringify(this.compTask));
    this.compTask = JSON.parse(this.service.lStorage.getItem("completedTask"));
  }

  onCompTaskDelete(index: number) {

    this.compTask[index].optionBtn = false;
    var deletedTask = this.compTask[index];
    this.compTask.splice(index, 1);
    this.service.deleteTask(this.compTask,"completed",deletedTask);
  }
}
