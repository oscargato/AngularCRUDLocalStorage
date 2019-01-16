import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(private servicio:TaskService) { }

  ngOnInit() {
  }

  agregarTarea(newTitle:HTMLInputElement, newDescription:HTMLInputElement){
  	this.servicio.addTask({
      title:newTitle.value,
      description:newDescription.value,
      hide:true,
    });
    newTitle.value = '';
    newDescription.value = '';
  	return false;
  }



}
