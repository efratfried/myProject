import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

const ELEMENT_DATA: any[] = [{ position: 1, name: 'clean the bathroom' }];

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css'],
})
export class TaskTableComponent implements OnInit {
  taskForm: FormGroup = new FormGroup({
    taskName: new FormControl(''),
  });

  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;
  selectedDate!: Date;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    
    this.route.queryParams.subscribe((params) => {
      if (params['date']) {
        this.selectedDate = new Date(params['date']);
      }
    });
  }

  addTask() {
    let isExistTask = this.dataSource.filter(
      (item) => item.name === this.taskForm.value.taskName
    );
    if (isExistTask.length == 0) {
      const position =
        this.dataSource.length > 0
          ? Math.max(...this.dataSource.map((item) => item.position)) + 1
          : 1;
      const newTask = {
        position: position,
        name: this.taskForm.value.taskName,
      };
      this.dataSource.push(newTask);
      this.dataSource = [...this.dataSource];
      this.taskForm.reset();
    } else {
      alert('This task is already exist');
      return;
    }
  }
}
