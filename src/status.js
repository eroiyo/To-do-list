import { save, load } from './data.js';

function afterchange(todo, i, boolean) {
  todo[i].completed = boolean;
  save(todo);
  return todo;
}

export function check(element) {
  const todo = load();
  const i = element.parentNode.parentNode.id;
  let boolean = false;
  if (todo[i].completed === true) {
    element.classList.remove('fa-check-square');
    element.classList.add('fa-square');
  } else {
    boolean = true;
    element.classList.remove('fa-square');
    element.classList.add('fa-check-square');
  }
  return afterchange(todo, i, boolean);
}

export function look(element) {
  if (element.classList.contains('line')) {
    element.classList.remove('line');
  } else {
    element.classList.add('line');
  }
}