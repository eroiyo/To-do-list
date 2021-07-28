let todov = 0;
const defaultTodo = [];

export function storageAvailable(type) { //look is localstorage is avalible
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
}
 //this functions are to save and load from localstorage, widely used in the project
if (storageAvailable('localStorage')) {
  todov = JSON.parse(localStorage.getItem('information'));
  if (todov === null) {
    todov = defaultTodo;
  }
} else {
  todov = defaultTodo;
}
export function save(variable) {
  localStorage.setItem('information', JSON.stringify(variable)); 
}
export function load() {
  let variable = JSON.parse(localStorage.getItem('information'));
  if (variable === null) {
    variable = [];
  }
  return variable;
}
export function compare(a, b) { //function to array sorting a<b
  return a.index - b.index;
}
export const todo = todov;