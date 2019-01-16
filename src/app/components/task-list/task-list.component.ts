import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tareas:Tarea[];

  constructor(private servicio:TaskService){ }

  ngOnInit() {
  	this.tareas = this.servicio.getTasks();
  }


}
