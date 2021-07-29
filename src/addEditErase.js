import { save, load } from './data.js';

export function antiShowAll(element) {
  while (element.lastElementChild) { // delete all the child elements
    element.removeChild(element.lastElementChild); // to stop displaying information in the html
  }
}

export function elimanateCompleteds() {
  const actualtodo = load();
  const result = actualtodo.filter((activity) => (activity.completed === false)); // delete all
  for (let i = 0; i < result.length; i += 1) { //completeds dutys from the list
    result[i].index = i; // and return one without completed acitivtys
  }
  save(result);
  return result;
}

export function addActivity(value) {
  const actualtodo = load();
  const { length } = actualtodo;
  const newActivity = {
    description: value,
    completed: false,
    id: Date(),
    index: length,
  };
  actualtodo[length] = newActivity;
  save(actualtodo);
  return actualtodo;
}

export function saveone(element) {
  const todolist = load();
  const index = element.parentNode.parentNode.id;
  todolist[index].description = element.value;
  save(todolist);
  return todolist;
}

function renewIndex(space) {
  let i = 0;
  space.childNodes.forEach((element) => {
    element.id = i;
    i += 1;
  });
}

export function removeone(i, space) {
  const element = space.childNodes[i];
  const todolist = load();
  todolist.splice(i, 1);
  save(todolist);
  space.removeChild(element);
  renewIndex(space);
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