function classificar() {
    var idadepessoa = idade.value
    if (idadepessoa >=5 && idadepessoa < 12) {
        alert('Criança')
        window.location.href="infantil.html"
    }
     else if (idadepessoa <=4) {
        alert('bebe')
    }
    else if (idadepessoa >=12 && idadepessoa <=18) {
        alert('Jovem')
        window.location.href="jovem.html"
    }
    else if (idadepessoa >= 19 && idadepessoa <= 70) {
        alert('Adulto')
        window.location.href="adulto.html"
    }
      else if (idadepessoa >= 71  && idadepessoa <= 120) {
        alert('Idoso')
    }
    else {
        alert('Idade Não Compativel')
    }
}
function mudaDesenho() {

    let desenho = document.getElementById("desenhos").value;

    let imagem = document.getElementById("apresentadesenho");

    let link = document.getElementById("linkdesenho");

    if (desenho === "ben10") {
        imagem.src = "img/ben10.jpg";
        document.getElementById('linkdesenho').href="https://www.youtube.com/watch?v=kLaF9b6wmrg"
    }

    else if (desenho === "gumball") {
        imagem.src = "img/gumball.jpg";
        document.getElementById('linkdesenho').href="https://www.youtube.com/watch?v=qEaygy39_cI"
    }

    else if (desenho === "homemaranha") {
        imagem.src = "img/homemaranha.jpg";
        document.getElementById('linkdesenho').href="https://www.youtube.com/watch?v=t06RUxPbp_c"
    }

    else {
        imagem.src = "img/tv.png";
        link.href = "#";
    }
}



function serie(){
    if(opcao1.checked){
        document.getElementById('foto').src='img/str.jpg'
        document.getElementById('sinopse').innerHTML="Stranger Things se passa na década de 1980, na cidade fictícia de Hawkins. A trama começa com o misterioso desaparecimento do garoto Will Byers. Enquanto sua mãe e o xerife local investigam, os amigos de Will encontram Eleven, uma garota fugitiva com poderes telecinéticos. Eles logo descobrem que o sumiço está ligado a experimentos secretos do governo e a uma dimensão paralela sombria conhecida como Mundo Invertido"
        document.getElementById('classificacao').innerHTML='+16'
    }
    else if(opcao2.checked){
        document.getElementById('foto').src='img/tbys.jpg'
        document.getElementById('sinopse').innerHTML="The Boys acompanha um grupo de vigilantes liderados por Billy Bruto, que lutam para expor a corrupção da corporação Vought International. A empresa gerencia super-heróis famosos, mas irresponsáveis, com poderes abusivos. A trama satiriza a adoração cega por heróis e o poder corporativo"
        document.getElementById('classificacao').innerHTML='+18'
    }
    else if(opcao3.checked){
        document.getElementById('foto').src='img/thewalk.jpg'
        document.getElementById('sinopse').innerHTML="The Walking Dead acompanha o xerife Rick Grimes, que acorda de um coma e descobre que o mundo foi devastado por um apocalipse zumbi. Lutando para sobreviver, ele reencontra sua família e lidera um grupo em busca de abrigo, descobrindo logo que os vivos podem ser tão perigosos quanto os mortos"
        document.getElementById('classificacao').innerHTML='+18'
    }
}


