/* eslint-disable no-loop-func */
import './style.css';
import { todo } from './data.js';
import { makeContainer } from './drag.js';
import { addActivity, elimanateCompleteds } from './addEditErase.js';
import Todo from './todo.js';

const theBigList = document.querySelector('.to-do-list');
const taskcreator = document.getElementById('new-item');
const erase = document.querySelector('.erase');
const form = document.getElementById('form');

makeContainer(theBigList);

const list = new Todo();
list.setTodo(todo);
list.setWhere(theBigList);
list.showall();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const result = addActivity(taskcreator);
  list.update(result);
});

erase.addEventListener('click', () => {
  const result = elimanateCompleteds();
  list.update(result);
});