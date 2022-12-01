import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from 'src/app/services/todoservice.service';

@Component({
  selector: 'app-imp-task',
  templateUrl: './imp-task.component.html',
  styleUrls: ['./imp-task.component.scss']
})
export class ImpTaskComponent implements OnInit {

  impTask: (object)[];
  constructor(private service: TodoserviceService) { 
    this.impTask = service.impTask;
  }

  ngOnInit(): void {
  }

}
