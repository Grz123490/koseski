document.addEventListener("DOMContentLoaded", function() {
    
    var inputElement1 = document.getElementById("imiein");
    var outputElement1 = document.getElementById("imieout");

    var inputElement2 = document.getElementById("nrin");
    var outputElement2 = document.getElementById("nrout");

    var inputElement3 = document.getElementById("datain");
    var outputElement3 = document.getElementById("dataout");

    inputElement1.addEventListener("input", function() {
        outputElement1.textContent = inputElement1.value;
    });

    inputElement2.addEventListener("input", function() {
        function generateString(character, repeatCount) {
            return character.repeat(repeatCount);
          }
          
        let l=inputElement2.value.length
        let val=inputElement2.value
        if(l<5){
            console.log(4-l)
            stars=generateString("*", 4-inputElement2.value.length)
            v1=val.substring(0,l)+stars
            v2="****"
            v3="****"
            v4="****"
            l=inputElement2.value.length
        } else if(4 <= l && l < 9){
            console.log(l)
            console.log(8-l)
            stars=generateString("*", 8-inputElement2.value.length)
            v1=val.substring(0,4)
            v2=val.substring(4,l)+stars
            v3="****"
            v4="****"
            l=inputElement2.value.length
        }   else if(9<=l && l<13){
            console.log(12-l)
            stars=generateString("*", 12-inputElement2.value.length)
            v1=val.substring(0,4)
            v2=val.substring(4,8)
            v3=val.substring(8,l)+stars
            v4="****"
            l=inputElement2.value.length
        }   else if(13<=l && l<=16){
            console.log(16-l)
            stars=generateString("*", 16-inputElement2.value.length)
            v1=val.substring(0,4)
            v2=val.substring(4,8)
            v3=val.substring(8,12)
            v4=val.substring(12,l)+stars
            l=inputElement2.value.length
        }   

        console.log(val.substring(0,16))
        console.log(val.substring(4,8))
        console.log(val.substring(8,12))
        console.log(val.substring(12,16))
        console.log(l)
          


        outputElement2.textContent=v1+"-"+v2+"-"+v3+"-"+v4
        console.log(v1+"-"+v2+"-"+v3+"-"+v4)
    
        inputElement2 = input.padEnd(19, "").substring(0, 19);

    });

    inputElement3.addEventListener("input", function() {
        outputElement3.textContent = inputElement3.value;
    });
});

function ustawTlo(obrazek) {
    var urlObrazka = obrazek.src;
    document.getElementById("karta").style.backgroundImage = 'url(' + urlObrazka + ')';
}

const kontener = document.getElementById("karta")
console.log(kontener);
const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 15; 

function handleHover(e) {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    kontener.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(e) {
    kontener.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia.matches) {
    kontener.addEventListener("mousemove", handleHover);
    kontener.addEventListener("mouseleave", resetStyles);
}

