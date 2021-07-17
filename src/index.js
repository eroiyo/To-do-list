/* eslint-disable no-loop-func */
import './style.css';
import { check, look } from './status.js';
import { todo, load } from './data.js';
import { makeContainer, makeDrageable } from './drag.js';
import {addActivity, antiShowAll, elimanateCompleteds, saveone, onfocus, offfocus ,removeone} from './addEditErase.js';

const theBigList = document.querySelector('.to-do-list');
const formButton = document.getElementById('submit-new-item');
const taskcreator = document.getElementById('new-item');
const erase = document.querySelector('.erase');
const form = document.getElementById('form');


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

  show(todolist,i){
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
        todolist=load();
        check(status, todolist);
        todolist = load();
      });

      const text = document.createElement('div');
      const input = document.createElement('input');
      const lastC = document.createElement('div');
      lastC.classList.add('tdle-last-c');

      const last = document.createElement('i');
      const trashcan = document.createElement('i');

      last.classList.add('fas');
      trashcan.classList.add('fas');

      last.classList.add('fa-ellipsis-v');
      trashcan.classList.add('fa-trash');
      trashcan.classList.add('hidden');
      trashcan.addEventListener('click', () => 
      {
        this.todo = removeone(trashcan)
        antiShowAll(theBigList);
        this.showall(todolist);
      })

      input.onfocus = () => {onfocus(input,last,trashcan);}
      input.onblur = () => {offfocus(input,last,trashcan);}
      text.classList.add('tdle-text-c');
      if (activity.completed === true) {
        input.classList.add('line');
      }
      input.value = activity.description;
      input.classList.add("editable");
      input.onchange = ( () => {  saveone(input)});
      text.appendChild(input);
      status.addEventListener('click', () => look(input));
      statusC.appendChild(status);
      container.appendChild(statusC);

      container.appendChild(text);

      lastC.appendChild(last);
      lastC.appendChild(trashcan)

      container.appendChild(lastC);
      theBigList.appendChild(container);
  }

  showall(todolist) {
    for (let i = 0; i < this.todo.length; i += 1) {
      this.show(todolist,i)
    }
  }
}


const list = new Todo();
list.setTodo(todo);
list.showall(todo);



form.addEventListener('submit', (event) => {
  event.preventDefault();
  addActivity(taskcreator.value);
  antiShowAll(theBigList);
  const todolist = load();
  list.setTodo(todolist)
  list.showall(todolist)
})


erase.addEventListener('click', ()=> {
  elimanateCompleteds();
  const todolist = load();
  antiShowAll(theBigList);
  list.setTodo(todolist)
  list.showall(todolist)
})