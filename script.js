const btn_entry = document.querySelector('.btn');
btn_entry.addEventListener('click', () => {
    btn_entry.classList.toggle('btn--turn');
});

const btn_unit1 = document.getElementById('btn_unit1');
btn_unit1.addEventListener('click', page1); 

const btn_unit2 = document.getElementById('btn_unit2');
btn_unit2.addEventListener('click', page2);

const btn_unit3 = document.getElementById('btn_unit3');
btn_unit3.addEventListener('click', page3);

let field_data1 = document.querySelector('.field_data1');
let field_data2 = document.querySelector('.field_data2');
let field_data3 = document.querySelector('.field_data3');

let slides1 = document.querySelector('.slides1');
let slides2 = document.querySelector('.slides2');
let slides3 = document.querySelector('.slides3');

function page1() {
    
    field_data2.classList.remove("show");
    field_data3.classList.remove("show");
    field_data1.classList.add("show");
    
    slides1.innerHTML = `<img class="slides1" src="images/unit_1.png">`;
    const imageA1 = () => {
        slides1.innerHTML = `<img class="slides1" src="images/unit_1a.png">`;
    }
    const imageB1 = () => {
        slides1.innerHTML = `<img class="slides1" src="images/unit_1b.png">`;
    }
    const imageC1 = () => {
        slides1.innerHTML = `<img class="slides1" src="images/unit_1c.png">`;
    }
    const imageD1 = () => {
        slides1.innerHTML = `<img class="slides1" src="images/unit_1d.png">`;
    }
    function show_off1() {
        slides1.innerHTML = `<img class="slides1" src="images/unit_1.png">`;
    }
    wall_A1.addEventListener('mouseover', imageA1);
    wall_B1.addEventListener('mouseover', imageB1);
    wall_C1.addEventListener('mouseover', imageC1);
    wall_D1.addEventListener('mouseover', imageD1);
    wall_A1.addEventListener('mouseout', show_off1);
    wall_B1.addEventListener('mouseout', show_off1);
    wall_C1.addEventListener('mouseout', show_off1);
    wall_D1.addEventListener('mouseout', show_off1);
};


function page2() {

    field_data1.classList.remove("show");
    field_data3.classList.remove("show");
    field_data2.classList.add("show");
  
    slides2.innerHTML = `<img class="slides2" src="images/unit_2.png">`;
    const imageA2 = () => {
        slides2.innerHTML = `<img class="slides2" src="images/unit_2a.png">`;
    }
    const imageB2 = () => {
        slides2.innerHTML = `<img class="slides2" src="images/unit_2b.png">`;
    }
    const imageC2 = () => {
        slides2.innerHTML = `<img class="slides2" src="images/unit_2c.png">`;
    }
    const imageD2 = () => {
        slides2.innerHTML = `<img class="slides2" src="images/unit_2d.png">`;
    }
    const imageE2 = () => {
        slides2.innerHTML = `<img class="slides2" src="images/unit_2e.png">`;
    }
    const imageF2 = () => {
        slides2.innerHTML = `<img class="slides2" src="images/unit_2f.png">`;
    }
    function show_off2() {
        slides2.innerHTML = `<img class="slides2" src="images/unit_2.png">`;
    }
    wall_A2.addEventListener('mouseover', imageA2);
    wall_B2.addEventListener('mouseover', imageB2);
    wall_C2.addEventListener('mouseover', imageC2);
    wall_D2.addEventListener('mouseover', imageD2);
    wall_E2.addEventListener('mouseover', imageE2);
    wall_F2.addEventListener('mouseover', imageF2);
    wall_A2.addEventListener('mouseout', show_off2);
    wall_B2.addEventListener('mouseout', show_off2);
    wall_C2.addEventListener('mouseout', show_off2);
    wall_D2.addEventListener('mouseout', show_off2);
    wall_E2.addEventListener('mouseout', show_off2);
    wall_F2.addEventListener('mouseout', show_off2);
}

function page3() {
    
    field_data1.classList.remove("show");
    field_data2.classList.remove("show");
    field_data3.classList.add("show");

    let slides3 = document.querySelector('.slides3');
    slides3.innerHTML = `<img class="slides2" src="images/unit_3n.png">`;
    const imageA3 = () => {
        slides3.innerHTML = `<img class="slides3" src="images/unit_3a.png">`;
    }
    const imageB3 = () => {
        slides3.innerHTML = `<img class="slides3" src="images/unit_3b.png">`;
    }
    const imageC3 = () => {
        slides3.innerHTML = `<img class="slides3" src="images/unit_3c.png">`;
    }
    const imageD3 = () => {
        slides3.innerHTML = `<img class="slides3" src="images/unit_3d.png">`;
    }
    const imageE3 = () => {
        slides3.innerHTML = `<img class="slides3" src="images/unit_3e.png">`;
    }
    const imageF3 = () => {
        slides3.innerHTML = `<img class="slides3" src="images/unit_3f.png">`;
    }
    const imageG3 = () => {
        slides3.innerHTML = `<img class="slides3" src="images/unit_3g.png">`;
    }
    const imageH3 = () => {
        slides3.innerHTML = `<img class="slides3" src="images/unit_3h.png">`;
    }
    function show_off3() {
        slides3.innerHTML = `<img class="slides3" src="images/unit_3n.png">`;
    }
    wall_A3.addEventListener('mouseover', imageA3);
    wall_B3.addEventListener('mouseover', imageB3);
    wall_C3.addEventListener('mouseover', imageC3);
    wall_D3.addEventListener('mouseover', imageD3);
    wall_E3.addEventListener('mouseover', imageE3);
    wall_F3.addEventListener('mouseover', imageF3);
    wall_G3.addEventListener('mouseover', imageG3);
    wall_H3.addEventListener('mouseover', imageH3);
    wall_A3.addEventListener('mouseout', show_off3);
    wall_B3.addEventListener('mouseout', show_off3);
    wall_C3.addEventListener('mouseout', show_off3);
    wall_D3.addEventListener('mouseout', show_off3);
    wall_E3.addEventListener('mouseout', show_off3);
    wall_F3.addEventListener('mouseout', show_off3);
    wall_G3.addEventListener('mouseout', show_off3);
    wall_H3.addEventListener('mouseout', show_off3);
}
