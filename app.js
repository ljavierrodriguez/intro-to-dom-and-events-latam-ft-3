/* 
DOM = Document Object Model

Objecto Principal 
--------------------

document

Metodos de Acceso a los elementos:
----------------------------------

getElementById(id) -- permite acceder al elemento por el id indicado <element id=""></element>
getElementsByClassName(class) -- permite acceder a todos los elementos con la clase indicada <element class=""></element>
getElementsByTagName(tag) -- permite acceder a todos los elementos indicado  p

querySelector(selector) -- permite acceder al primer elemento con el selector indicado 
querySelectorAll(selector) -- permite acceder a todos los elementos con el selector indicado


createElement(tag) -- permite crear un nuevo elemento
createTextNode(texto) -- permite crear un nodo de texto

innerHTML -- permite sustituir contenido o incluir contenido
appendChild -- permite añadir nuevo contenido sin perder el anterior

*/

let idiomas = ["Ingles", "Español", "Aleman"]

let home = document.getElementById('home')
console.log(home)

let p = document.getElementsByClassName('mensaje')
console.log(p)

let pArr = document.querySelectorAll('.mensaje')
console.log(pArr)

let lista = document.querySelector('.lista')
let items = lista.getElementsByTagName('li')
let items2 = lista.querySelectorAll('li')

let h1 = document.createElement('h1')
h1.innerHTML = "Hola Mundo desde Javascript"

console.log(h1)

document.body.appendChild(h1)

let footer = document.querySelector('.footer')

let ulLang = document.createElement('ul')

idiomas.forEach((idioma) => {
    let li = document.createElement('li')
    li.innerHTML = idioma

    /* 
    let texto = document.createTextNode(idioma)
    li.appendChild(texto) 
    */

    ulLang.appendChild(li)

})

console.log(ulLang)

footer.appendChild(ulLang)

let box = document.querySelector('.box')

box.classList.add('box-border-dotted')

function saludar(){
    alert("Hola como estan?")
}

function despedir(){
    alert("Chao, nos vemos luego")
}

let pSaludar = document.querySelector('.saludar')

//pSaludar.addEventListener('mouseover', saludar)
//pSaludar.addEventListener('mouseout', despedir)


let btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    let div = document.createElement('div')
    div.innerHTML = `Capturando el evento click desde javascript`
    document.body.appendChild(div)
})

let search = document.querySelector('input')

search.addEventListener('keyup', (evento) => {
    console.log(evento)
    console.log(evento.target)
    console.log(evento.key)
})

let loginForm = document.querySelector('.login')

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let error = false

    let email = document.querySelector('input[type=email]')
    if(email.value == ''){
        email.classList.add('alert')
        error = true
    } else {
        email.classList.remove('alert')
        error = false
    }

    if(!error){
        e.target.submit()
    }
})

let links = document.querySelector('.links')
links.addEventListener('click', (e) => {
    e.preventDefault()
    let g = document.querySelector('.google')
    if(g.classList.contains('show')){
        g.classList.remove('show')
        g.classList.add('hide')
    } else {
        g.classList.remove('hide')
        g.classList.add('show')
    }
})

/* setInterval(() => {
    console.log("Hola")
}, 1000) */

/* setTimeout(() => {
    console.log("Hola")
}, 5000) */