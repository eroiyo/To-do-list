// eslint-disable no-loop-func
import './style.css';
import { check, look } from './status.js';
import { todo, load } from './data.js';
import { makeContainer, makeDrageable } from './drag.js';

const theBigList = document.querySelector('.to-do-list');
makeContainer(theBigList);
class Todo {
  constructor() {
    this.todo = null;
  }

  setTodo(todolist) {
    this.todo = todolist;
  }

  getTodo() {
    return this.todo;
  }

  showall(todolist) {
    for (let i = 0; i < this.todo.length; i += 1) {
      const activity = this.todo[i];
      const container = document.createElement('li');
      makeDrageable(container);
      container.classList.add('tdl-element');
      container.draggable = true;
      container.id = todolist[i].index;

      const statusC = document.createElement('div');
      statusC.classList.add('tdle-status-c');

      const status = document.createElement('i');
      status.classList.add('far');
      if (activity.completed === true) {
        status.classList.add('fa-check-square');
      } else {
        status.classList.add('fa-square');
      }
      status.addEventListener('click', () => {
        check(status, todolist, i);
        todolist = load();
      });

      const text = document.createElement('div');
      text.classList.add('tdle-text-c');
      if (activity.completed === true) {
        text.classList.add('line');
      }
      text.textContent = activity.description;

      status.addEventListener('click', () => look(text));
      statusC.appendChild(status);
      container.appendChild(statusC);

      container.appendChild(text);

      const lastC = document.createElement('div');
      lastC.classList.add('tdle-last-c');

      const last = document.createElement('i');
      last.classList.add('fas');
      last.classList.add('fa-ellipsis-v');

      lastC.appendChild(last);

      container.appendChild(lastC);
      theBigList.appendChild(container);
    }
  }
}
const list = new Todo();
list.setTodo(todo);
list.showall(todo);