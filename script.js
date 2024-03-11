$(document).ready(main);
var contador = 1;
function main(){
    $('.menu').click(function(){
        // $('nav').toggle();
        if(contador == 1){
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        }else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            })
        }
    });
};

var parrafo1 = document.querySelector(".parrafo1");
var parrafo2 = document.querySelector(".parrafo2");
var parrafo3 = document.querySelector(".parrafo3");


function visibleParrafo1(){
    parrafo1.style.display = "block";
    parrafo2.style.display = "none";
    parrafo3.style.display = "none";
    contador = 1;
            $('nav').animate({
                left: '-100%'
            })
            contador = 1;
};


function visibleParrafo2(){
    parrafo1.style.display = "none";
    parrafo2.style.display = "block";
    parrafo3.style.display = "none";
    $('nav').animate({
        left: '-100%'
    })
    contador = 1;
}

function visibleParrafo3(){
    parrafo1.style.display = "none";
    parrafo2.style.display = "none";
    parrafo3.style.display = "block";
    $('nav').animate({
        left: '-100%'
    })
    contador = 1;
}


function cambiarPagina() {
    window.location.href = "https://www.instagram.com/lunarte.aho/";
}

document.addEventListener('DOMContentLoaded', function() {
    var floatingBtn = document.getElementById('floating-btn');
  
    floatingBtn.addEventListener('click', function() {
      window.location.href = "https://www.instagram.com/lunarte.aho/";
    });
  });
  

  
