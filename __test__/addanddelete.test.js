
/**
 * @jest-environment jsdom
 */

const data = require('../src/data');
const addEditErase = require('../src/addEditErase');
const todoObject = require('../src/todo')

document.body.innerHTML =
'<input id="new-item" class="input" placeholder="Add to your list..." type="text">' +
'<div>' +
' <li class="to-do-list"></li>'+
'</div>';

const theBigList = document.querySelector('.to-do-list');
describe('The add function is working as expected', () => {
  test('add a element to local Storage', () => {
    addEditErase.addActivity("hello");
    const result=data.load();
    expect(result.length).toBe(1);
    
  });

  test('add a element to todolist object', () => {
   let list = new todoObject.Todo();
   const result=data.load();
   list.setTodo(result);
   expect(list.todo).toHaveLength(1);
  });

  test('modify the html, adding a new element', () => {
    const array = theBigList.childNodes;
    expect(array).toHaveLength(1);
  });
});
describe('delete function is working as expected', () => {
  test('delete a element to local Storage', () => {
    addEditErase.addActivity('hello');
    const result = data.load();
    addEditErase.removeone(0, theBigList)
    expect(result.length).toBe(0);
  });

  test('delete a element to todolist object', () => {
    let list = new todoObject.Todo();
    const result = data.load();
    list.setTodo(result);
    expect(list.todo).toHaveLength(0);
  });

  test('deleting the html, deleting a new element', () => {
  const array = theBigList.childNodes;
  expect(array).toHaveLength(0);
  });
});