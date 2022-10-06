window.addEventListener('load',()=> { /* Escucha cuando se carga el documento  */
/* Se crean 2 constantes y se guardan los elementos necesarios  */    
const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');
    /* Se crea otra constante para convertir el htmlcollection en array */

    const keypaddButtonsArray = Array.from(keypadButtons);
    /* Se itera por array de botones  */
keypaddButtonsArray.forEach ((button) =>{
    /* listener por cada boton  */
button.addEventListener('click', ()=>{ 
    calculadora(button, display)
 })
})
});
 function calculadora(button, display){
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;

            case '=':
            calcular(display);
            break;

            default:
                actualizar(display, button);
                          break;
 } 
 }

 function calcular(display) {
   display.innerHTML = eval(display.innerHTML) /* Tomar el string y resolverlo  y guardarlo en el inner del display */
 }
 function actualizar (display, button){
    if (display.innerHTML == 0){
        display.innerHTML = '';        
    }
    display.innerHTML += button.innerHTML;
 }
 function borrar (display) {
    display.innerHTML = 0
 }