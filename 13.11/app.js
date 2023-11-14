function zad1(){
    const text = document.querySelector("#inp1").value;
    document.querySelector("#text1").innerHTML=text.length
    console.log(text)
}

function zad2(){
    const text = document.querySelector("#inp2").value;
    document.querySelector("#text2").innerHTML=text.toUpperCase()
    console.log(text)
}

function zad3(){
    const text = document.querySelector("#inp3").value;
    document.querySelector("#text3").innerHTML=text.replaceAll("a","A")
    console.log(text)
}

function zad4(){
    const reduta = "Nam strzelać nie kazano. - Wstąpiłem na działo I spójrzałem na pole; dwieście armat grzmiało. Artyleryi ruskiej ciągną się szeregi, Prosto, długo, daleko, jako morza brzegi I widziałem ich wodza: przybiegł, mieczem skinął I jak ptak jedno skrzydło wojska swego zwinął Wylewa się spod skrzydła ściśniona piechota Długą czarną kolumną, jako lawa błota, Nasypana iskrami bagnetów. Jak sępy Czarne chorągwie na śmierć prowadzą zastępy."
    const text = document.querySelector("#inp4").value
    if (reduta.includes(text)){
        document.querySelector("#text4").innerHTML="Znajduje sie"
    } else {
        document.querySelector("#text4").innerHTML="NIE Znajduje sie"
    }
}

function zad5(){
    const reduta = "Nam strzelać nie kazano. - Wstąpiłem na działo I spójrzałem na pole; dwieście armat grzmiało. Artyleryi ruskiej ciągną się szeregi, Prosto, długo, daleko, jako morza brzegi I widziałem ich wodza: przybiegł, mieczem skinął I jak ptak jedno skrzydło wojska swego zwinął Wylewa się spod skrzydła ściśniona piechota Długą czarną kolumną, jako lawa błota, Nasypana iskrami bagnetów. Jak sępy Czarne chorągwie na śmierć prowadzą zastępy."
    const text = document.querySelector("#inp5").value
    let licznik = 0
    for (let i = 0; i < reduta.length; i++){
        if (reduta.search(text)){
            document.querySelector("#text5").innerHTML="Znajduje sie"
            licznik++;
        }
        // document.querySelector("#text5").innerHTML=licznik

    }
        
        console.log(licznik)
}
