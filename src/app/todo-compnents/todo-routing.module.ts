import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule , Routes } from '@angular/router';
import { AllTaskComponent } from './all-task/all-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { CompleteTaskComponent } from './complete-task/complete-task.component';
import { ImpTaskComponent } from './imp-task/imp-task.component';

const routes : Routes = [
  {
    path: 'add-task',
    component: AddTaskComponent,
  },
  {
    path: 'delete-task',
    component: DeleteTaskComponent,
  },
  {
    path: 'complete-task',
    component: CompleteTaskComponent,
  },
  {
    path: '',
    component: ImpTaskComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
