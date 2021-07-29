/* eslint-disable no-loop-func */
import './style.css';
import { todo } from './data.js';
import { makeContainer } from './drag.js';
import { addActivity, elimanateCompleteds } from './addEditErase.js';
import { Todo } from './todo.js';

// This is the main script of the application, here are used all the functions of the files to be
// used in the application

const theBigList = document.querySelector('.to-do-list');
const taskcreator = document.getElementById('new-item'); // get html elements variables to add
const erase = document.querySelector('.erase');// functions for the buttons
const form = document.getElementById('form');

makeContainer(theBigList); // making the list container a element that you can drag elements over

const list = new Todo(); // the Todo object is the responsible to print the information in the page
list.setTodo(todo); // get information from the localstorage
list.setWhere(theBigList); // target of the Todo Object
list.showall(); // display

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const result = addActivity(taskcreator.value);
  taskcreator.value = '';
  list.update(result);
}); // editing the submit function to add items to the list instead

erase.addEventListener('click', () => {
  const result = elimanateCompleteds();
  list.update(result);
}); // add a clear list function for the html