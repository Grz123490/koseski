async function GetDATA(){
    const data = await fetch("https://restcountries.com/v3.1/all")
    const json = await data.json()
    const lista = document.getElementById("lista");
    console.log(json)
    for(let licznik = 0; licznik<=json.length; licznik++){
        if (json[licznik].continents.includes("Europe") && json[licznik].population > 30000000){
            const NowaLista = document.createElement("li");
            NowaLista.innerHTML=json[licznik].name.common;
            lista.appendChild(NowaLista);
            console.log(json[licznik].name.common)
        }
    }
}
GetDATA()