//garante que o código JavaScript seja executado somente após o carregamento completo da página.
document.addEventListener('DOMContentLoaded', function() {

    function tocaSom (seletorAudio){ 
        const elemento = document.querySelector(seletorAudio);
        if( elemento != null && elemento.localName === 'audio'){
            elemento.play();
        }else{
            alert('Elemento  não encontrado ou seletor inválido');
        }
    }     

    const listaDeTeclas = document.querySelectorAll('.tecla');

    for (let contador = 0; contador < listaDeTeclas.length; contador++){
        const tecla = listaDeTeclas[contador] 
        const instrumento = tecla.classList[1];

        tecla.onclick = function(){
            const idAudio = `#som_${instrumento}`;
            tocaSom(idAudio);
        };
        // tecla enter e espaço
        tecla.onkeydown = function (evento) {
            if(evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
            }
          }
          tecla.onkeyup = function () {
            tecla.classList.remove('ativa');
          }
    }

  });
