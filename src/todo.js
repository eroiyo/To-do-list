import { check, look } from './status.js';
import { makeDrageable } from './drag.js';
import { antiShowAll, saveone, onfocus, offfocus, removeone,
} from './addEditErase.js';

const theBigList = document.querySelector('.to-do-list');

export class Todo {
  constructor() {
    this.todo = null;
  }
  setTodo(todolist) {
    this.todo = todolist;
  }
  
  getTodo() {
    return this.todo;
  }
  
    show(i) {
      const activity = this.todo[i];
      const container = document.createElement('li');
      const statusC = document.createElement('div');
      const status = document.createElement('i');
  
      const text = document.createElement('div');
      const input = document.createElement('input');
  
      const lastC = document.createElement('div');
      const last = document.createElement('i');
      const trashcan = document.createElement('i');
  
      makeDrageable(container);
      container.classList.add('tdl-element');
      container.draggable = true;
      container.id = i;
      this.todo[i].index = i
      statusC.classList.add('tdle-status-c');
      status.classList.add('far');
      if (activity.completed === true) {
        status.classList.add('fa-check-square');
      } else {
        status.classList.add('fa-square');
      }
      status.addEventListener('click', () => {
        this.todo = check(status, this.todo);
      });
      lastC.classList.add('tdle-last-c');
  
      last.classList.add('fas');
      trashcan.classList.add('fas');
  
      last.classList.add('fa-ellipsis-v');
      trashcan.classList.add('fa-trash');
      trashcan.classList.add('hidden');
      trashcan.addEventListener('click', () => {
        this.todo = removeone(container.id, theBigList);
      });
  
      input.onfocus = () => { onfocus(input, last, trashcan); };
      input.onblur = () => { offfocus(input, last, trashcan); };
      text.classList.add('tdle-text-c');
      if (activity.completed === true) {
        input.classList.add('line');
      }
      input.value = activity.description;
      input.classList.add('editable');
      input.onchange = (() => { saveone(input); });
      status.addEventListener('click', () => look(input));
  
      text.appendChild(input);
      statusC.appendChild(status);
      container.appendChild(statusC);
  
      container.appendChild(text);
      lastC.appendChild(last);
  
      lastC.appendChild(trashcan);
      container.appendChild(lastC);
      theBigList.appendChild(container);
    }
  
    showall() {
      for (let i = 0; i < this.todo.length; i += 1) {
        this.show(i);
    }
  }
  update(todolist)
  {
    this.todo=todolist;
    antiShowAll(theBigList);
    this.showall();
  }
}