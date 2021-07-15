
export function uncheck(element,a) {
  element.classList.remove('fa-check-square');
  element.classList.add('fa-square');
  element.removeEventListener('click',a)
  element.addEventListener('click', function a ()  { check(element,a) })
}

export function check(element,a) {
  element.classList.remove('fa-square');
  element.classList.add('fa-check-square');
  element.removeEventListener('click',a)
  element.addEventListener('click', function a () { uncheck(element,a) })
}