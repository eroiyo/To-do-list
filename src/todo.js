import { check, look } from './status.js';
import { makeDrageable } from './drag.js';
import {
  antiShowAll, saveone, onfocus, offfocus, removeone,
} from './addEditErase.js';
export const pi = 3.14;
export class Todo {          //the class todo is the one responsible to manipulate html
  constructor() {                                       // using information from localstorage
    this.todo = null;  //the array of information
    this.where = null;//target of the list
  }

  setTodo(todolist) {
    this.todo = todolist; //set information to display
  }

  setWhere(where) {
    this.where = where; //set target of the list
  }

  getTodo() {
    return this.todo;
  }

  show(i) {
    const activity = this.todo[i];               //take a individual element of the list to use for information
    const container = document.createElement('li'); //declare elements for futher editing
    const statusC = document.createElement('div');
    const status = document.createElement('i');

    const text = document.createElement('div');
    const input = document.createElement('input');

    const lastC = document.createElement('div');
    const last = document.createElement('i');
    const trashcan = document.createElement('i');

    makeDrageable(container, this.where); //tramsform the element in a draggeable element
    container.classList.add('tdl-element'); //classes are added
    container.draggable = true;
    container.id = i;
    this.todo[i].index = i; //the index is overwritteng for their actual position
    statusC.classList.add('tdle-status-c');  
    status.classList.add('far');
    if (activity.completed === true) {  //start giving classes to style elements
      status.classList.add('fa-check-square');
    } else {
      status.classList.add('fa-square');
    }
    status.addEventListener('click', () => {
      const result = check(status);
      this.update(result);
    });
    lastC.classList.add('tdle-last-c');

    last.classList.add('fas');
    trashcan.classList.add('fas');

    last.classList.add('fa-ellipsis-v');
    trashcan.classList.add('fa-trash');
    trashcan.classList.add('hidden');
    trashcan.addEventListener('click', () => {
      this.todo = removeone(container.id, this.where); //add the individual element remove function using
    }); //the element id

    input.onfocus = () => { onfocus(input, last, trashcan); }; //add the function to display the trashcan
    input.onblur = () => { offfocus(input, last, trashcan); }; // when focus in the element
    text.classList.add('tdle-text-c');
    if (activity.completed === true) {
      input.classList.add('line');
    }
    input.value = activity.description;
    input.classList.add('editable');
    input.onchange = (() => { saveone(input); }); //save the element on change
    status.addEventListener('click', () => look(input));

    text.appendChild(input); //start appending the elements to unify it to the container
    statusC.appendChild(status);
    container.appendChild(statusC);

    container.appendChild(text);
    lastC.appendChild(last);

    lastC.appendChild(trashcan);
    container.appendChild(lastC);
    this.where.appendChild(container); //put the container inside the target location
  }

  showall() {
    for (let i = 0; i < this.todo.length; i += 1) {
      this.show(i);
    }
  }

  update(todolist) {
    this.todo = todolist;
    antiShowAll(this.where);
    this.showall(); //update information of the object after a localstorage change
  }
}