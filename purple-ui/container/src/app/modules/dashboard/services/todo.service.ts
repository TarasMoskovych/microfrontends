import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TodoService {
  private readonly sessionKey = 'purple-ui:todo';
  private readonly defaultTodos: ITodo[] = [
    { task: 'Meeting with Urban Team', completed: false },
    { task: 'Duplicate a project for new customer', completed: false },
    { task: 'Project meeting with CEO', completed: false },
    { task: 'Follow up of team zilla', completed: true },
    { task: 'Level up for Antony', completed: false },
  ];
  private readonly todos$ = new BehaviorSubject<ITodo[]>(
    JSON.parse(localStorage.getItem(this.sessionKey) as string) || this.defaultTodos,
  );

  getTodos(): Observable<ITodo[]> {
    return this.todos$.asObservable();
  }

  setTodos(todos: ITodo[]): void {
    this.todos$.next(todos);
    localStorage.setItem(this.sessionKey, JSON.stringify(todos));
  }
}

export interface ITodo {
  task: string;
  completed: boolean;
}
