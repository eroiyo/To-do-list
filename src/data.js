export let todov = 0;
const defaultTodo = [
  {
    description: 'Complete to-do-List',
    completed: false,
    id: 0,
    index: 0,
  },
  {
    description: 'Clean Washes',
    completed: true,
    id: 1,
    index: 1,
  },
  {
    description: 'Do more examples',
    completed: true,
    id: 2,
    index: 2,
  },
];

export function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage && storage.length !== 0);
  }
}

if (storageAvailable('localStorage')) {
  todov = JSON.parse(localStorage.getItem('information'));
  if (todov === null) {
    todov = defaultTodo;
  }
} else {
  todov = todov = defaultTodo;
}
export function save(variable) {
  localStorage.setItem('information', JSON.stringify(variable));
}
export function load(variable) {
  variable = JSON.parse(localStorage.getItem('information'));
  return variable
}
export let todo = todov;