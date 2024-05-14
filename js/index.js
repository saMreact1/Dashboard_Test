// Get references to DOM elements
let wrapper1 = document.querySelector('#wrapper1');
let wrapper2 = document.querySelector('#wrapper2');
let wrapper3 = document.querySelector('#wrapper3');
let div1 = document.querySelector('#main1');
let div2 = document.querySelector('#main2');
let div3 = document.querySelector('#main3');
let div4 = document.querySelector('#main4');
let div5 = document.querySelector('#main5');
let div6 = document.querySelector('#main6');
let arrow1 = document.querySelector('#arrow1');
let arrow2 = document.querySelector('#arrow2');
let arrow3 = document.querySelector('#arrow3');
let arrow4 = document.querySelector('#arrow4');
let arrow5 = document.querySelector('#arrow5');


arrow1.classList.add("up");
arrow2.classList.add("up");
arrow3.classList.add("up");
arrow4.classList.add("up");
arrow5.classList.add("up");

wrapper1.classList.add("wrap-position");
wrapper2.classList.add("wrap-position");
wrapper3.classList.add("wrap-position");
wrapper4.classList.add("wrap-position");
wrapper5.classList.add("wrap-position");



// Add event listeners to arrows
arrow1.addEventListener('click', () => hideShow(div1, arrow1, wrapper1));
arrow2.addEventListener('click', () => hideShow(div2, arrow2, wrapper2));
arrow3.addEventListener('click', () => hideShow(div3, arrow3, wrapper3));
arrow4.addEventListener('click', () => hideShow(div4, arrow4, wrapper4));
arrow5.addEventListener('click', () => hideShow(div5, arrow5, wrapper5));


function hideShow(div, arrow, wrapper) {
    if (div.style.display === 'none') {
        if (!arrow.classList.add('down')) {
            div.style.display = 'block';
            wrapper.classList.add('wrap-position');
            arrow.innerHTML = "keyboard_arrow_up";
            arrow.classList.add('up');
            arrow.classList.remove('down');
        }
    } else {
        div.style.display = 'none';
        wrapper.classList.remove('wrap-position');
        arrow.innerHTML = "keyboard_arrow_down";
        arrow.classList.add('down');
        arrow.classList.remove('up');
    }
}