import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tareas:Tarea[] = [];

  constructor(){
    /*
  		this.tareas=[
  		  {	title:'Leer',
  			  description:'Tengo que leer',
          hide:true,
  		  },
  		  {	title:'Escribir',
  			  description:'Tengo que Escribir',
          hide:true,
  		  }
  		]
    */  
  }

  getTasks(){
    if(localStorage.getItem('tasks') != null){
        this.tareas = JSON.parse(localStorage.getItem('tasks'));
    }
  	return this.tareas;
  }


  addTask(task:Tarea){
    this.tareas.push(task);
    let tasks:Tarea[] = [];
    if(localStorage.getItem('tasks') === null){
        tasks.push(task);
        localStorage.setItem('tasks',JSON.stringify(tasks));
    } 
    else
    {  tasks = JSON.parse(localStorage.getItem('tasks'));
       tasks.push(task);
       localStorage.setItem('tasks',JSON.stringify(tasks));
    }
  }


  deleteTask(tarea:Tarea){
    for(let i=0; i < this.tareas.length ;i++){
        if(tarea == this.tareas[i]){
            this.tareas.splice(i,1);
            localStorage.setItem('tasks',JSON.stringify(this.tareas));
        }
    }
  }


}
