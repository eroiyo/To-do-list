import {save} from './data.js'

const theBigList = document.querySelector('.to-do-list');

function getDragAfterElement(tdle, y) {
    const dragableElements = [...tdle.querySelectorAll('.tdl-element:not(.dragging)')]
  
    return dragableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element
  }

function hold(element){
    element.classList.add('dragging');
}

function drag(element){
    element.classList.remove('dragging');
}

export function makeDrageable(element){
    element.addEventListener('dragstart', () => {hold(element)})
    element.addEventListener('dragend', () => {drag(element)
      const e = document.querySelectorAll(".tdl-element")
      console.log(e);
    })
}

export function makeContainer(tdl){
    tdl.addEventListener('dragover', e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(tdl, e.clientY)
        const dragable = document.querySelector('.dragging')
        if (afterElement == null) {
          tdl.appendChild(dragable)
        } else {
          tdl.insertBefore(dragable, afterElement)
        }
      })
}
  