
function scrollDireita() {
    const carrossel = document.getElementById("carrossel");
    carrossel.scrollBy({ left: 220, behavior: "smooth" });
  }
  
  function scrollEsquerda() {
    const carrossel = document.getElementById("carrossel");
    carrossel.scrollBy({ left: -220, behavior: "smooth" });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const botaoBusca = document.getElementById("search-button");
    const inputBusca = document.getElementById("search-input");
    const mensagemDiv = document.getElementById("mensagem-busca");
  
    botaoBusca.addEventListener("click", function (event) {
      event.preventDefault();
      const valorBusca = inputBusca.value.trim();
  
      if (valorBusca !== "") {
        mensagemDiv.textContent = `Você buscou por: '${valorBusca}'`;
      } else {
        mensagemDiv.textContent = "";
      }
    });
  });
  