const slider = document.querySelector(".slider");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let indice = 0;

function actualizar(){

    const tarjetasVisibles = window.innerWidth <= 768 ? 1 : 2;

    slider.style.transform =
        `translateX(-${indice * (70/tarjetasVisibles)}%)`;

}

next.addEventListener("click",()=>{

    const max = window.innerWidth <=768 ? 3 : 1;

    if(indice < max){
        indice++;
        actualizar();
    }

});

prev.addEventListener("click",()=>{

    if(indice>0){
        indice--;
        actualizar();
    }

});

window.addEventListener("resize",actualizar);

actualizar();