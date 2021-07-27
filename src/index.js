/* eslint-disable no-loop-func */
import './style.css';
import { todo, load } from './data.js';
import { makeContainer } from './drag.js';
import {
  addActivity, antiShowAll, elimanateCompleteds
} from './addEditErase.js';
import {Todo} from './todo.js'

const theBigList = document.querySelector('.to-do-list');
const taskcreator = document.getElementById('new-item');
const erase = document.querySelector('.erase');
const form = document.getElementById('form');

makeContainer(theBigList);

let list = new Todo();
list.setTodo(todo);
list.showall(todo);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const result = addActivity(taskcreator.value);
  antiShowAll(theBigList);
  list.setTodo(result);
  list.showall(result);
});

erase.addEventListener('click', () => {
  const result = elimanateCompleteds();
  antiShowAll(theBigList);
  list.setTodo(result);
  list.showall(result);
});