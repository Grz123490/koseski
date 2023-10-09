var licznik = 0
function dodaj(){
    const lista = document.getElementById("lista");
    const NowaLista = document.createElement("li");
    licznik++
    NowaLista.innerHTML=licznik;
    lista.appendChild(NowaLista);
}