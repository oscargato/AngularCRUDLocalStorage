import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../../models/tarea';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task:Tarea;

  constructor(private servicio:TaskService) { }

  ngOnInit() {
  }

  deleteTask(tarea:Tarea){
  	if(confirm('Desea eliminar la Tarea???')){
  		this.servicio.deleteTask(tarea);	
  	}
  }


}
