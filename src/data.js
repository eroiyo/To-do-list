let todov = 0;
const defaultTodo = [];

export function storageAvailable(type) {
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
export function compare(a, b) {
  return a.index - b.index;
}
export const todo = todov;