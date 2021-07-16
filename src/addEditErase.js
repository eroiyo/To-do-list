import { save, load} from './data.js';

const theBigList = document.querySelector('.to-do-list');

export function antiShowAll(element){
    while(element.hasChildNodes){
        element.removeChild(element.lastChild);
    }
}

export function elimanateCompleteds(){
    const actualtodo = load();
    const result = actualtodo.filter(activity => activity.completed === false);
    for(let i = 0; i < result.length; i +=1){
        result[i].index = i;
    }
    save(result);
}

export function addActivity(text){
    actualtodo =load()
    newActivity =  {
        description: text,
        completed: false,
        id: Date(),
        index: actualtodo.length,
    }
    actualtodo[actualtodo.length] =newActivity;
    save(actualtodo);
}

export function elimanateOne(element){
    id = element.id;
    const actualtodo = load();
    const result = actualtodo.filter(activity => activity.id === id);
    element.parentNode.removeChild(element);
    e = theBigList.querySelectorAll('.tdl-element');
    for(let i = 0; i < result.length; i +=1){
        result[i].index = i;
        e[i].id = i;

    }
    save(result);
}