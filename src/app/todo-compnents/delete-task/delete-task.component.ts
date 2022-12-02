import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from 'src/app/services/todoservice.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.scss']
})
export class DeleteTaskComponent implements OnInit {

  delTask: (any)[];
  constructor(private service: TodoserviceService) { 
    this.delTask = service.deletedTask;
  }

  ngOnInit(): void {
  }

  // form showing option div on page
  showOption(index: number) {

    for(var i = 0; i < this.delTask.length; i++) {

      if(index !== i)
        this.delTask[i].optionBtn = false;
    }
    
    this.delTask[index].optionBtn = !this.delTask[index].optionBtn;
  }

  deleteAll() {

    this.delTask = [];
    this.service.allTaskDelete("delete");
  }

  updateTask() {
    
  }

}
