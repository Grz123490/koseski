function klik() {
    const text = document.getElementById("imie").value
    const text2 = document.getElementById("ocena").value
    console.log(text)
    console.log(text2)
    document.getElementById("h1").innerHTML=text
    document.getElementById("h2").innerHTML=text2
}