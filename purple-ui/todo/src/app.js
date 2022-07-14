class Todo extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this._buildUI();

    this._todoList = this.shadowRoot.querySelector('.todo-list');
    this._form = this.shadowRoot.querySelector('.add-items');
    this._addInput = this._form.querySelector('input');
    this._addButton = this._form.querySelector('button');
    this._newTodoValue = '';

    this._toggleListeners(true);
  }

  disconnectedCallback() {
    this._toggleListeners(false);
  }

  setTodos(todos) {
    this._todos = todos;
    this._render();
  }

  _buildUI() {
    this._todos = [];

    this.shadowRoot.innerHTML = `
      <style>@import url("https://d22qz1pbt23bxr.cloudfront.net/container/latest/styles.086d6c82f4e3e34d.css")</style>

      <div id="todo-wrapper">
        <div class="list-wrapper pt-2">
          <ul class="d-flex flex-column-reverse todo-list todo-list-custom">
            ${this._getTodoList()}
          </ul>
        </div>
        <form class="add-items d-flex mb-0 mt-2">
          <input type="text" class="form-control todo-list-input" formControlName="todoitem" placeholder="Add new task">
          <button class="add btn btn-primary todo-list-add-btn py-2" disabled>Add</button>
        </form>
      </div>
    `;
  }

  _toggleListeners(add) {
    this._todoList[add ? 'addEventListener' : 'removeEventListener']('click', this._onTodoListClick.bind(this));
    this._addInput[add ? 'addEventListener' : 'removeEventListener']('keyup', this._onAddInputChange.bind(this));
    this._form[add ? 'addEventListener' : 'removeEventListener']('submit', this._onFormSubmit.bind(this));
  }

  _onTodoListClick(e) {
    e.preventDefault();
    const idx = e.target.closest('li').dataset.id;

    if (e.target.closest('.form-check')) {
      this._todos[idx].completed = !this._todos[idx].completed;
    } else if (e.target.className.includes('remove')) {
      this._todos.splice(idx, 1);
    } else {
      return;
    }

    this._render();
    this._dispatchEvent();
  }

  _onAddInputChange(e) {
    this._newTodoValue = e.target.value;
    this._addButton.toggleAttribute('disabled', !this._newTodoValue.length);
  }

  _onFormSubmit(e) {
    e.preventDefault();

    if (!this._newTodoValue.length) {
      return;
    }

    this._todos.push({ task: this._newTodoValue, completed: false });
    this._addInput.value = '';
    this._onAddInputChange({ target: this._addInput });
    this._render();
    this._dispatchEvent();
  }

  _getTodoList() {
    return this._todos.reduceRight((acc, item, idx) => acc += this._getTodo(item, idx), '');
  }

  _getTodo(todo, idx) {
    return `
      <li class="${todo.completed ? 'completed' : ''}" data-id=${idx}>
        <div class="form-check form-check-flat">
          <label class="form-check-label">
            <input class="checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}>
            ${todo.task}
            <i class="input-helper"></i>
          </label>
        </div>
        <i class="remove mdi mdi-close"></i>
      </li>
    `;
  }

  _render() {
    this._todoList.innerHTML = this._getTodoList();
  }

  _dispatchEvent() {
    this.dispatchEvent(new CustomEvent('todos:changed', { detail: this._todos }));
  }
}

customElements.define('todo-element', Todo);
