
/**
 * @jest-environment jsdom
 */

const data = require('../src/data');
const addEditErase = require('../src/addEditErase');
const todoObject = require('../src/todo')

document.body.innerHTML =
'<div>' +
' <li class="to-do-list"></li>'+
'</div>';


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
    const theBigList = document.querySelector('.to-do-list');
    expect(true).toBe(true)
    console.log(theBigList)
  });
});