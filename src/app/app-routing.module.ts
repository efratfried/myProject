import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePeekeComponent } from './date-peeke/date-peeke.component';
import { TaskTableComponent } from './task-table/task-table.component';

const routes: Routes = [
  { path: '', component: DatePeekeComponent },
  { path: 'tasks', component: TaskTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
