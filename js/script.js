/*Variabili  */
const initialBtns = document.querySelectorAll('#initialBtn button');

/* collego pulasnti ad evento */
initialBtns[0].addEventListener('click', () => {
    switchVisibility('initial', 'mailCheker');
});

initialBtns[1].addEventListener('click', () => {
    switchVisibility('initial', 'btnDice');
});

function switchVisibility(value1, value2) {
    const content1 = document.getElementById(value1);
    const content2 = document.getElementById(value2);
    content1.classList.add('d-none');
    content2.classList.remove('d-none');
    setTimeout(() => {
        content2.style.opacity = 1;
    }, 10);
}
