/**
 * @jest-environment jsdom
 */

const data = require('../src/data.js');
const addEditErase = require('../src/addEditErase.js');
const todoObject = require('../src/todo.js');

document.body.innerHTML = 
 `<input id="new-item" class="input" placeholder="Add to your list..." type="text" value="hola">
  <div>
   <li class="to-do-list"></li>
  </div>`;
const theBigList = document.querySelector('.to-do-list');

const input = document.getElementById('new-item');

describe('The add function is working as expected', () => {
  test('add a element to local Storage', () => {
    addEditErase.addActivity(input);
    const result = data.load();
    expect(result).toHaveLength(1);
  });

  test('add a element to todolist object', () => {
    const result = data.load();
    const list = new todoObject.Todo();
    list.setTodo(result);
    expect(list.todo).toHaveLength(1);
  });

  test('modify the html, adding a new element', () => {
    const result = data.load();
    const list = new todoObject.Todo();
    list.setTodo(result);
    list.setWhere(theBigList);
    list.showall();
    const array = theBigList.childNodes;
    expect(array).toHaveLength(1);
  });
});
describe('delete function is working as expected', () => {
  test('delete a element to local Storage', () => {
    let result = data.load();
    result = addEditErase.removeone(0, theBigList);
    expect(result).toHaveLength(0);
  });

  test('delete a element to todolist object', () => {
    const result = data.load();
    const list = new todoObject.Todo();
    list.setTodo(result);
    list.showall();
    expect(list.todo).toHaveLength(0);
  });

  test('deleting the html, deleting a new element', () => {
    const result = data.load();
    const list = new todoObject.Todo();
    list.setTodo(result);
    list.setWhere(theBigList);
    list.showall();
    const array = theBigList.childNodes;
    expect(array).toHaveLength(0);
  });
});