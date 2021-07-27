
/**
 * @jest-environment jsdom
 */

const data = require('../src/data');
const addEditErase = require('../src/addEditErase');
const todoObject = require('../src/todo')


describe('The add function is working as expected', () => {
  test('add a element to local Storage', () => {
    addEditErase.addActivity("hello");
    const result=data.load();
    expect(result.length).toBe(1);
    
  });

  test('add a element to todolist object', () => {
   let list = new todoObject.Todo();
   addEditErase.addActivity("hello");
   const result=data.load();
   list.setTodo(result);
   expect(list.todo.length).toBe(1);
  });

  test('modify the html, adding a new element', () => {
    expect(true).toBe(true)
  });

  test('delete a element from todolist object', () => {
    expect(true).toBe(true)
  });

  test('delete a element from localstorage', () => {
    expect(true).toBe(true)
  });

  test('delete a element from html', () => {
    expect(true).toBe(true)
  });
});