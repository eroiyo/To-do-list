import { save, load } from './data.js';

export function antiShowAll(element) {
  while (element.lastElementChild) { // delete all the child elements
    element.removeChild(element.lastElementChild); // to stop displaying information in the html
  }
}

export function elimanateCompleteds() {
  const actualtodo = load();
  const result = actualtodo.filter((activity) => (activity.completed === false)); // delete all
  for (let i = 0; i < result.length; i += 1) { // completeds dutys from the list
    result[i].index = i; // and return one without completed acitivtys
  }
  save(result);
  return result;
}

export function addActivity(value) {
  const actualtodo = load(); // load information from local storage
  const { length } = actualtodo;
  const newActivity = { // create a bew task for the list
    description: value,
    completed: false,
    id: Date(),
    index: length,
  };
  actualtodo[length] = newActivity; // save it in the list
  save(actualtodo); // to finally save the list in localstorage
  return actualtodo;
}

export function saveone(element) {
  const todolist = load(); // get the list from localstorage
  const index = element.parentNode.parentNode.id;
  todolist[index].description = element.value; // edit the desired value
  save(todolist);
  return todolist;
}

function renewIndex(space) { // add index as id for every child in a HTML element
  let i = 0;
  space.childNodes.forEach((element) => {
    element.id = i;
    i += 1;
  });
}

export function removeone(i, space) {
  const element = space.childNodes[i]; 
  const todolist = load();
  todolist.splice(i, 1); // delete a element forn localstorage
  save(todolist); // save the new list
  space.removeChild(element); // remove the child element from html
  renewIndex(space);
  return todolist;
}

export function onfocus(element, handle, trashcan) { // change the color when focus
  setTimeout(() => {
    element.parentNode.parentNode.classList.add('focused');
    element.classList.add('focused');
    handle.classList.add('hidden');
    trashcan.classList.remove('hidden');
  }, 200);
}
export function offfocus(element, handle, trashcan) { // return the element to normal state
  setTimeout(() => { // after focus
    element.parentNode.parentNode.classList.remove('focused');
    element.classList.remove('focused');
    handle.classList.remove('hidden');
    trashcan.classList.add('hidden');
  }, 200);
}