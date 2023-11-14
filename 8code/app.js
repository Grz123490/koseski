async function kraje() {
    const data = await fetch("https://restcountries.com/v3.1/all")
    const json = await data.json()
    console.log(json)

    for(let i = 0; i<=json.length-1; i++){
        
        const div_kraj = document.createElement("div");
        div_kraj.classList.add("div_kraj");

        const div_nazwa = document.createElement("div");
        div_nazwa.classList.add("div_nazwa");

        const div_stolica = document.createElement("div");
        div_stolica.classList.add("div_stolica");

        const nazwa = document.createElement("h2");
        nazwa.innerHTML = json[i].name.common;
        
        const stolica = document.createElement("h2");
        stolica.innerHTML = json[i].capital;
       
        const hr = document.createElement("hr");

        div_kraj.appendChild(div_nazwa);
        div_kraj.appendChild(hr)
        div_kraj.appendChild(div_stolica);
        div_nazwa.appendChild(nazwa);
        div_stolica.appendChild(stolica);
        

        document.getElementById("container").appendChild(div_kraj);
    }
}

kraje();