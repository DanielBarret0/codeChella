/* ============= Botao menu hamburguer ===================== */

function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}


/* ============= Menu sanfonado ===================== */


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/* ======================= Botao voltar ao topo da tela ======================== */

// quando o usuário rolar a página em 20px, o botão será exibido
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "flex";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

// quando o usuário clicar no botão, a página será rolada até o topo
document.getElementById("topBtn").onclick = function() {topFunction()};

function topFunction() {
  document.body.scrollTop = 0; // para Safari
  document.documentElement.scrollTop = 0; // para Chrome, Firefox, IE e Opera
}
