function mudaCor() {
    if (cores.value == 'branco') {
        document.getElementById('texto').style.color = 'white'
        document.getElementById('texto').style.border = 'solid 3px orange'

    }
    else if (cores.value == 'preto') {
        document.getElementById('texto').style.color = 'black'
        document.getElementById('texto').style.border = 'solid 3px red'

    }
    else if (cores.value == 'verde') {
        document.getElementById('texto').style.color = 'green'
        document.getElementById('texto').style.border = 'solid 3px gray'

    }
    else{
        document.getElementById('texto').style.color = 'black'
        document.getElementById('texto').style.border = ''
    }
}
function muda(){
    alert("Saiu do campo")
}