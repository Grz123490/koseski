var licznik = 0
function dodaj(){
    while(licznik<100){
    const lista = document.getElementById("lista");
    const NowaLista = document.createElement("button");
    licznik++
    NowaLista.innerHTML=licznik;
    lista.appendChild(NowaLista);
}
}
window.onload(dodaj())