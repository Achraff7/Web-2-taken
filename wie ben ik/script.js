'use strict';
console.log ('Achraf oef werkt')
let h1Element = document.querySelector('.h1');
console.log (h1Element);
h1Element.style.backgroundColor = 'blue'
//
let achrafElement = document.querySelector('#Achraf');
achrafElement.style.textDecoration = "underline";

//

let klasseNaam = 'vijfde-rij';

let studenten = document.getElementsByClassName(klasseNaam);
console.log (studenten);
//
for (let element of studenten){
    console.log(studenten)
    element.style.backgroundColor = 'purple'
}
    





