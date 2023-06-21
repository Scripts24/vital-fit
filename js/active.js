//Clase active

const li = document.querySelectorAll(".links")
const sec = document.querySelectorAll("section , footer")

function activeMenu(){
    let len = sec.length
    while(--len && window.scrollY + 97 < sec [len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("active"))
    li[len].classList.add("active")
}
activeMenu()
window.addEventListener('scroll', activeMenu)