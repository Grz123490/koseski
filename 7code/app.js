async function kraje() {
    const data = await fetch("https://restcountries.com/v3.1/all")
    const json = await data.json()
    const flagi = document.getElementById("container")
    console.log(json)
    for(let licznik = 0; licznik<=json.length; licznik++){
        
            const div_kraj = document.createElement("div");
            div_kraj.classList.add("div_kraj");
            
            const div_flaga = document.createElement("div")
            div_flaga.classList.add("div_flaga");
            
            const img = document.createElement("img")
            img.setAttribute("src", json[licznik].flags.png)
            
            const div_info = document.createElement("div")
            div_info.classList.add("div_info");

            const nazwa = document.createElement("h1")
            nazwa.innerHTML = json[licznik].name.common

            const stolica = document.createElement("h2")
            stolica.innerHTML = json[licznik].capital

            const populacja = document.createElement("h2")
            populacja.innerHTML = json[licznik].population
            
            
            
            div_flaga.appendChild(img)
            div_kraj.appendChild(div_flaga)
            
            
            div_info.appendChild(nazwa)
            div_info.appendChild(stolica)
            div_info.appendChild(populacja)
            div_kraj.appendChild(div_info)

            document.getElementById("container").appendChild(div_kraj);
            
            //stolica i populcaj


        
    }
}

kraje();