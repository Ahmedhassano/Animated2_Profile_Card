let card = document.querySelector(".card")
let btn = document.querySelector(".card .btn")
let active=true
btn.onclick = function () {
    card.classList.toggle("active")
    
    if (active) {        
        active = false
        btn.textContent = "close"
}
    else {
        btn.textContent = "hire me"
        active =true
    }
 }