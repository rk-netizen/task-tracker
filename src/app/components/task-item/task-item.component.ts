import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { TaskResponse } from '../../task.interface';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input()
  task!: TaskResponse;
  @Output() onDeleteTask: EventEmitter<TaskResponse> = new EventEmitter(); // element getting deleted is of 'TaskResponse type'
  @Output() onToggleReminder: EventEmitter<TaskResponse> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  onDelete(task: TaskResponse){
    this.onDeleteTask.emit(task); 
  }

  onToggle(task: TaskResponse){
    this.onToggleReminder.emit(task)

  }

  ngOnInit(): void {
  }

}
