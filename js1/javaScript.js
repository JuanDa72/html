function ventanaAlerta(){
    alert("Esta es una vetana de alerta pero dirigida desde una función js");
}

document.getElementsByTagName("p")[2].addEventListener("click",function(){
    alert("Esta es una nueva ventana que llamamos usando addEVentListener");
});

document.getElementById("IdParrafo").addEventListener("click",function(){
    alert("Esta es una ventana que sale con una identificador by ID");
});

let pClases=document.getElementsByClassName("claseP");
for(let i=0; i<2; i++){
    pClases[i].addEventListener("click",function(){
        alert("Esta es una ventana que sale mediante un identificador de clase y un bucle");
    });
};

document.querySelector("#parrafoQ").addEventListener("dblclick",function(){
    document.querySelector("#parrafoQ").textContent="Ahora tenemos un nuevo texto aquí";
    
});

/*let nodeList=document.querySelectorAll(".classQuery");
nodeList.forEach(function(element) {
    document.addEventListener("keydown", function() {
        element.style.color = "blue";
    });
});
*/

let nodeList = document.querySelectorAll(".classQuery");
let isBlue = false;

// Registramos un solo evento keydown que actúa sobre todos los elementos
document.addEventListener("keydown", function() {
    nodeList.forEach(function(element) {
        if (!isBlue) {
            element.style.color = "blue";
        } else {
            element.style.color = "black";
        }
    });
    // Alternamos el valor de isBlue después de cambiar el color de todos los elementos
    isBlue = !isBlue;
});

document.querySelector("img").addEventListener("click",function(){
    document.querySelector("img").style.display="none";
});

document.querySelector("img").addEventListener("mouseover",function(){
    let image=document.querySelector("img");
    image.width=300;
    Image.height=300;
})