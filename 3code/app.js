var licznik = 0
function number(x){ 
    if (!document.getElementById(x).innerHTML){  
        if (licznik<9) {
        licznik++
            document.getElementById(x).innerHTML=licznik    
        if (licznik%2) {
            document.getElementById(x).style.backgroundColor = "red"  
        } else {
            document.getElementById(x).style.backgroundColor = "blue"  
        }
    }   
        console.log(document.getElementById(x).innerHTML)
    }
}