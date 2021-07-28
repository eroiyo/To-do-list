/**
 * @jest-environment jsdom
 */

 //setting html mock
 const data = require('../src/data.js');
 const addEditErase = require('../src/addEditErase.js');
 const todoObject = require('../src/todo.js');
 
 document.body.innerHTML = '<input id="new-item" class="input" placeholder="Add to your list..." type="text" value="hola"> <div> <li class="to-do-list"></li> </div>';
 const theBigList = document.querySelector('.to-do-list');


 addEditErase.addActivity('i am the first element');
 addEditErase.addActivity('i am the second element');

 const result=data.load();
 const list = new todoObject.Todo();
 list.setTodo(result);
 list.setWhere(theBigList);
 list.showall();

 test('the mock is ready', () => { console.log(document.body.innerHTML);
 })

 //
