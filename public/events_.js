//Bienvenido a mi primer intento de tomar eventos del usuario en tiempo real y ajustar la página
//a medida que uno interactua con la página!

//Acá le decimos al programa que tome en cuenta la existencia de los elementos (en este caso del index.html)
//Que tengan una de las id "dog" "trend" o "navBar" fíjense en /public/index.html
//Esto me permite ver alguna propiedad de los elementos con estos id, como la posición, que me
//Permite CAMBIARLA; lo más importante a través de su atributo .style.PROPIEDAD_A_CAMBIAR
const dog = document.querySelector("#dog");
const trend = document.querySelector("#trend");
const nav = document.querySelector("#navBar")

var lastScroll = 0;


//esta función es muy interesante, le dice al programa que cada vez que se detecte "scroll", es decir
//que te arrastrés de por la página ejecute una función
window.addEventListener("scroll", () =>{
    //creo una variable que pueda almacenar la posición de la barrita de scroll
    //Sé que es confuso que sea una const que "cambie de valor". Lo que en realidad sucede es que
    //scrollY_ es puntero que te redirige detrás de cámaras a una variable donde se encuentra guardada
    //el valor de windows.scrollY, que es una variable normal. Osea, lo que es "const" es a qué variable se
    //refiere. A esto en programación se lo denomina "Puntero" (pointer) y es más normalmente visto en c++
    const scrollY_ = window.scrollY; 
    
    //actualizo el valor de scrollY_ con el original.  
    navBarDisplay(scrollY_);


    //si la barra está entre 210 y 730 (de posición Y)
    if(scrollY_ < 730 && scrollY_ > 210){
       
        //que la posición x de la clase dog sea 0px (centro de la página)
            dog.style.transform = "translateX(0px)";      
    }
    else{
        //que la posición x de la clase dog sea 100vw (derecha de la página)
        dog.style.transform = "translateX(100vw)";  

    }

    if(scrollY_  < 480 && scrollY_ > 0){
        //que la posición x de trend sea 0px (centro de la página)
        trend.style.transform = "translateX(0px)";
    }
    else{
        //que la posición x de trend sea -89vw (izquierda de la página)
        trend.style.transform = "translateX(-80vw)";
    }
})

//esta es una función booleana(de true o false) que comprueba si la última posición en la que estuvo la barra
//es superior o inferor a sy (la posición de la barra que le pasás a través de los parámetros), dándote true
//si hacés para arriba la barra o false si hacés para abajo 
function upwardsScroll(sy){
    if(lastScroll < sy){

        lastScroll = sy;

        return true;

    }
    else lastScroll = sy; return false;
}


//está función toma como parámetro la posición Y de la barra (sí, ya sé que la denominé x, re mal jaja), y 
//a través de la función upwardsScroll verifica si vas arriba o abajo. Con esta información, determina si
//mostrarte la barrita que está arriba en la página o no, cambiando su posición con translateY
function navBarDisplay(x){
    if(upwardsScroll(x)){
        //mueve a la clase nav hacia abajo (100 píxeles por debajo del centro del div en el que está)
        nav.style.transform = "translateY(-100px)";
        
    }
    else{
        //mueve a la clase nav hacia arriba (justo en el centro del div en el que está)
        nav.style.transform = "translateY(0px)";
        
    }
}