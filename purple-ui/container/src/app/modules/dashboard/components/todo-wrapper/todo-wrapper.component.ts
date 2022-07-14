import { loadRemoteModule, getManifest, LoadRemoteModuleOptions } from '@angular-architects/module-federation';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { ITodo } from '../../services/todo.service';

@Component({
  selector: 'app-todo-wrapper',
  template: '<todo-element #todo></todo-element>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoWrapperComponent implements OnInit, OnDestroy {
  @Input() todos: ITodo[] | null = [];
  @Output() todosChanged = new EventEmitter<ITodo[]>();
  @ViewChild('todo') todoEl!: ElementRef;

  private readonly sub$ = new Subscription();

  async ngOnInit(): Promise<void> {
    const { todo } = getManifest();

    await loadRemoteModule(todo as LoadRemoteModuleOptions);

    this.todoEl.nativeElement.setTodos(this.todos);

    this.sub$.add(
      fromEvent(this.todoEl.nativeElement, 'todos:changed').subscribe(({ detail }: any) => {
        this.todosChanged.emit(detail);
      }),
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
