const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    btn.classList.toggle('btn--turn');
});

/*const btn_1 = document.querySelector('.btn_1');
btn_1.addEventListener('click', () => {
    enter_data.classList.toggle('enter_dataOff');
});*/

const btn_2 = document.querySelector('.btn_2');
const btn_3 = document.querySelector('.btn_3');
const btn_4 = document.querySelector('.btn_4');


let slides = document.querySelector('.slides');   
let wall_num = document.getElementsByClassName("wall_num");
slides.innerHTML = `<img class="slides" src="../images/unit_1.png">`;

const imageA = () => {
    slides.innerHTML = `<img class="slides" src="../images/unit_1a.png">`;
}
const imageB = () => {
    slides.innerHTML = `<img class="slides" src="../images/unit_1b.png">`;
}
const imageC = () => {
    slides.innerHTML = `<img class="slides" src="../images/unit_1c.png">`;
}
const imageD = () => {
    slides.innerHTML = `<img class="slides" src="../images/unit_1d.png">`;
}
    function show_off() {
    slides.innerHTML = `<img class="slides" src="../images/unit_1.png">`;
}

wall_A.addEventListener('mouseover', imageA);
wall_B.addEventListener('mouseover', imageB);
wall_C.addEventListener('mouseover', imageC);
wall_D.addEventListener('mouseover', imageD);
wall_A.addEventListener('mouseout', show_off);
wall_B.addEventListener('mouseout', show_off);
wall_C.addEventListener('mouseout', show_off);
wall_D.addEventListener('mouseout', show_off);
