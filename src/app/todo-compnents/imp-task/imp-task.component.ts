import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from 'src/app/services/todoservice.service';

@Component({
  selector: 'app-imp-task',
  templateUrl: './imp-task.component.html',
  styleUrls: ['./imp-task.component.scss']
})
export class ImpTaskComponent implements OnInit {

  impTask: (any)[];
  constructor(private service: TodoserviceService) { 
    this.impTask = service.impTask;
  }

  ngOnInit(): void {
  }

  // form showing option div on page
  showOption(index: number) {

    for(var i = 0; i < this.impTask.length; i++) {

      if(index !== i)
        this.impTask[i].optionBtn = false;
    }
    
    this.impTask[index].optionBtn = !this.impTask[index].optionBtn;
  }

  onImpTaskDelete(index: number) {

    this.impTask[index].optionBtn = false;
    var deletedTask = this.impTask[index];
    this.impTask.splice(index, 1);
    this.service.deleteTask(this.impTask,"important",deletedTask);
  }

  deleteAll() {

    this.impTask = [];
    this.service.allTaskDelete("important");
  }

  updateTask() {
    
  }
}
