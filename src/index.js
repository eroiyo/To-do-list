import _ from 'lodash';

const ()
function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }

  todo = [
    {
      description: 'Complete to-do-List',
      completed: 'false',
      id: 0,
      index:0,
    },
    {
      description: 'Clean Washes',
      completed: 'true',
      id: 1,
      index: 1,
    },
    {
      description: 'Do more examples',
      completed: 'true',
      id: 2,
      index: 2,
    },
  ];

  class Todo{
    constructor(){
      this.todo = null;
    }
    setTodo(todolist){
      this.todo =todolist;
    }
    getTodo(){
    return this.todo;
    }
    
  }
  import './style.css';