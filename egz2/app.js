function skrypt1(){
    kolor = document.getElementById("text1").value
    console.log(kolor)
    document.getElementById("kom1").style.setProperty("--primary-color", kolor)
    document.getElementById("kom2").style.setProperty("--primary-color", kolor)
    document.getElementById("kom3").style.setProperty("--primary-color", kolor)
    document.getElementById("kom4").style.setProperty("--primary-color", kolor)
    document.getElementById("kom5").style.setProperty("--primary-color", kolor)
    console.log(document.getElementById("kom1").style.setProperty("--primary-color", kolor))
}