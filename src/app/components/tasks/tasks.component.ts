import { Component, OnInit } from '@angular/core';
import { TaskResponse } from '../../task.interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  taskArray: TaskResponse[] = [];

  constructor(private taskService:TaskService) {}

  ngOnInit(): void {
    this.taskService.getTask().subscribe(tasks=>{
      this.taskArray = tasks
    });
  }

  deleteTask(task: TaskResponse){
    this.taskService.deleteTask(task).subscribe(()=>{
      this.taskArray = this.taskArray.filter((t) => t.id !== task.id) // get rid from UI
    }); 
   }

   toggleReminder(task: TaskResponse){
     task.reminder = !task.reminder;
     this.taskService.updateTaskReminder(task).subscribe();
   }

   addTask(task: TaskResponse){
     this.taskService.addTask(task).subscribe((task)=>{
      this.taskArray.push(task);
     })
     
   }

}
