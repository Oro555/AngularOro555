import { Component } from '@angular/core';
import { injectDispatch, injectSelector } from '@reduxjs/angular-redux';
import { addTask, toggleTask, deleteTask, selectAllTasks } from './store/tasks.slice';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {

  // Redux Toolkit se convierte en un signal nativo automáticamente
  tasks = injectSelector(selectAllTasks);

   dispatch = injectDispatch();

  onAddTask(title: string) {
    if (title.trim()) {
      this.dispatch(addTask(title));
    }
  }

  onToggleTask(id: string) {
    this.dispatch(toggleTask(id));
  }

  onDeleteTask(id: string) {
    this.dispatch(deleteTask(id));
  }
}
