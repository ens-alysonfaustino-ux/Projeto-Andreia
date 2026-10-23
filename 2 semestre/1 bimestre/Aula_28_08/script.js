let selecao = document.querySelector('.lista')

console.log(selecao)

// querySelector('') encontra o primeiro elemento baseado no seletor CSS recebido
//seletor CSS = elemento, id , classe

let todosElementos = document.querySelectorAll('.lista')

console.log(todosElementos)

//querySelectorAll() retorno todos os elemntros do seletor css indicado

let titulo = document.querySelector('h1')
titulo.textContent = '#Sextei'

let mudaLista = document.querySelectorAll('.lista')
mudaLista.forEach(function(mudaLista){
    mudaLista.style.color='green'
})

function soma(a,b){
    let resultado = 2 + 3
    console.log(resultado)
}

soma(6,3)
soma(9,8)

let subtracao = function(){
let resultado = 6 - 3
console.log(resultado)
}
subtracao()
let multiplica =()=>{
let resultado = 9 * 9
console.log(resultado)
}
multiplica()
