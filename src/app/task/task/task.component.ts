import { Component, Input, OnInit } from '@angular/core';
import { TaskState } from "../../enum/task-state.enum";
import { Task } from "../../model/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() subject: string;

  private _state: TaskState;
  @Input()
  set state(state: TaskState) {
    this._state = state;
    this.stateDesc = this.getStateDesc();
  }
  get state(): TaskState {
    return this._state;
  }

  stateDesc: string;

  TaskState = TaskState;

  constructor() { }

  ngOnInit(): void { }

  getStateDesc(): string {
    switch (this._state) {
      case TaskState.None:
        return "未完成";
      case TaskState.Doing:
        return "進行中";
      case TaskState.Finish:
        return "已完成";
    }
  }

  onSetTaskState(state: TaskState): void {
    this._state = state;
  }

  getStateColor(): string {
    switch (this._state) {
      case TaskState.Doing:
        return "green";
      case TaskState.Finish:
        return "blue";
    }
  }

  getStateStyle(): string {
    switch (this._state) {
      case TaskState.Doing:
        return "color: green";
      case TaskState.Finish:
        return "color: blue";
    }
  }

}
