import { save, load } from './data.js';

function afterchange(todo, i, boolean) {
  todo[i].completed = boolean;  //change state of the array, to save it in localstorage
  save(todo);
  return todo;
}

export function check(element) {
  const todo = load();
  const i = element.parentNode.parentNode.id;  // get the id of the container to modify the localstorage in
  let boolean = false;                   //the afterchange function
  if (todo[i].completed === true) {
    element.classList.remove('fa-check-square');
    element.classList.add('fa-square');
  } else {
    boolean = true; //this both conditionals change the apparence of the checkbox depending prior stage
    element.classList.remove('fa-square');
    element.classList.add('fa-check-square');
  }
  return afterchange(todo, i, boolean);
}

export function look(element) {
  if (element.classList.contains('line')) {
    element.classList.remove('line'); //write a line over the input value, after check a element
  } else {
    element.classList.add('line');
  }
}