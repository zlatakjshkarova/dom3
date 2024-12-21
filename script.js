// DOMContentLoaded Сфмый верхний узел докуьунтп
//document.documentElement=html;
document.documentElement;
console.log(document.documentElement);

let Element = document.querySelector('#btn');
let mycontre = document.querySelector("#container");

// addEventListener()-добавляет орабочик события
Element.addEventListener('click', () => {
    console.log('Клик по мне')
    mecontre.style = 'red'

})
mycontre.addEventListener('click', () => {
    console.log('Клик по мне')
})

