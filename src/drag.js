import { save, load, compare } from './data.js';

const theBigList = document.querySelector('.to-do-list');

function getDragAfterElement(tdle, y) {
  const dragableElements = [...tdle.querySelectorAll('.tdl-element:not(.dragging)')];

  return dragableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) { // this function is the one that let you
      return { offset, element: child }; // put the elements in the middle of the list
    } return closest; // instead of only the last position
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function hold(element) {
  element.classList.add('dragging'); // assing the class for the element that is currently
} // being hold

function drag(element) {
  element.classList.remove('dragging'); // delete the class when stop holding the element
}

export function dragend(list) {
  const newTodo = [];
  // deleting the dragging classes when needed
  const e = list.querySelectorAll('.tdl-element');
  const todo = load(); // load current localstorage information
  todo.sort(compare);
  for (let i = 0; i < e.length; i += 1) { // compared the old information with the html actual
    const otherId = parseInt(e[i].id, 10);// positions
    newTodo[i] = todo[otherId];
    newTodo[i].index = i;
    e[i].id = [i];
  }
  save(newTodo); // save the new list
  return newTodo;// and return it for the todo object
}

export function makeDrageable(element, list) {
  element.addEventListener('dragstart', () => { hold(element); });
  element.addEventListener('dragend', () => {
    drag(element);
    dragend(list);
  });
}

export function makeContainer(tdl) {
  tdl.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(tdl, e.clientY); // make the list a element that
    const dragable = theBigList.querySelector('.dragging'); // can take the draggeable elements
    if (afterElement == null) {
      tdl.appendChild(dragable);
    } else {
      tdl.insertBefore(dragable, afterElement);
    }
  });
}
