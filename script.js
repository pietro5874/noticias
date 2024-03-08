const botaoAbrir = document.querySelector(".header-mobile > button")
const botaofechar = document.querySelector(".header-mobile nav button")

const body = document.querySelector("body")
const nav = document.querySelector(".header-mobile nav")

botaoAbrir.addEventListener('click', abirMenu)
botaofechar.addEventListener('click', fecharMenu)

function abirMenu () {
    body.classList.add("escurecer")
    nav.classList.add("abir")
}

function fecharMenu () {
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}