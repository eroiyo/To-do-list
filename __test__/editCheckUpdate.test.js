/**
 * @jest-environment jsdom
 */

// setting html mock
const data = require('../src/data.js');
const addEditErase = require('../src/addEditErase.js');
const todoObject = require('../src/todo.js');
const status = require('../src/status.js');
const drag = require('../src/drag.js');

document.body.innerHTML = '<input id="new-item" class="input" placeholder="Add to your list..." type="text" value="hola"> <div> <li class="to-do-list"></li> </div>';
const theBigList = document.querySelector('.to-do-list');

addEditErase.addActivity('i am the first element');
addEditErase.addActivity('i am the second element');

// mock completed

test('The editing feature is working well', () => {
  const content = theBigList.childNodes[0];
  const editable = content.querySelector('.editable');
  editable.value = 'i am the first element, edited';
  addEditErase.saveone(editable);
  const a = data.load();
  expect(a[0].description).toBe('i am the first element, edited');
});

test('The check status is working well', () => {
  const content = theBigList.childNodes[0];
  const checkbox = content.querySelector('.far');
  status.check(checkbox);
  const a = data.load();
  expect(a[0].completed).toBe(true);
});

test('The sorting function is working well', () => {
  theBigList.childNodes[0].id = 1;
  theBigList.childNodes[1].id = 0;
  drag.dragend(theBigList);
  const a = data.load();
  expect(a[0].description).toBe('i am the second element');
});

const result = data.load();
const list = new todoObject.Todo();
list.setTodo(result);
list.setWhere(theBigList);
list.showall();

test('the clear all completed function', () => {
  const result = addEditErase.elimanateCompleteds();
  list.update(result);
  expect(theBigList.childNodes.length).toBe(1);
});
