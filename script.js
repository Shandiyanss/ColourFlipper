const btnbtn = document.getElementById("btn-btn")
const colo = document.getElementById("colo")
const wrap = document.getElementById("wrap")
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']


btnbtn.addEventListener('click',changeBg)

function changeBg(){
    let hexColor ='#'
    for(let i=1;i<=6;i++){
        hexColor += randHexValue()
    }
    wrap.style.backgroundColor = hexColor
    colo.innerHTML = hexColor
}

function randHexValue(){
    let randomIndex=Math.floor(Math.random()*16)
    return hex[randomIndex]
}