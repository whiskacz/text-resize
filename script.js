const btn1 = document.querySelector(".bigger");
const btn2 = document.querySelector(".smaller");
const text = document.querySelector("p");
let textSize = 10;

btn1.addEventListener("click", Plus)
btn2.addEventListener("click", Minus)
function Plus () {
    textSize++;
    text.style.fontSize = textSize + "px" 
}
function Minus (){
    textSize--;
    text.style.fontSize = textSize + "px"
}