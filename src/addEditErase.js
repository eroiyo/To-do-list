import { save, load } from './data.js';

const theBigList = document.querySelector('.to-do-list');

export function antiShowAll(element) {
  while (element.lastElementChild) {
    element.removeChild(element.lastElementChild);
  }
}

export function elimanateCompleteds() {
  const actualtodo = load();
  const result = actualtodo.filter((activity) => (activity.completed === false));
  for (let i = 0; i < result.length; i += 1) {
    result[i].index = i;
  }
  save(result);
  return actualtodo
}

export function addActivity(text) {
  const actualtodo = load();
  const { length } = actualtodo;
  const newActivity = {
    description: text,
    completed: false,
    id: Date(),
    index: length,
  };
  actualtodo[length] = newActivity;
  save(actualtodo);
  return actualtodo
}

export function saveone(element) {
  const todolist = load();
  const index = element.parentNode.parentNode.id;
  todolist[index].description = element.value;
  save(todolist);
  return todolist;
}

export function removeone(element) {
  const todolist = load();
  const index = element.parentNode.parentNode.id;
  todolist.splice(index, 1);
  save(todolist);
  return todolist;
}

export function onfocus(element, handle, trashcan) {
  setTimeout(() => {
    element.parentNode.parentNode.classList.add('focused');
    element.classList.add('focused');
    handle.classList.add('hidden');
    trashcan.classList.remove('hidden');
  }, 200);
}
export function offfocus(element, handle, trashcan) {
  setTimeout(() => {
    element.parentNode.parentNode.classList.remove('focused');
    element.classList.remove('focused');
    handle.classList.remove('hidden');
    trashcan.classList.add('hidden');
  }, 200);
}