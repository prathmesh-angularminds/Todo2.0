import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { AllTaskComponent } from './all-task/all-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { CompleteTaskComponent } from './complete-task/complete-task.component';
import { TodoRoutingModule } from './todo-routing.module';
import { ImpTaskComponent } from './imp-task/imp-task.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddTaskComponent,
    AllTaskComponent,
    CompleteTaskComponent,
    DeleteTaskComponent,
    ImpTaskComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodoCompnentsModule { }
