document.addEventListener("DOMContentLoaded", function() {
  const data = new Date();
  const dataFormatada = data.toLocaleDateString("pt-BR", {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  document.querySelector(".data").textContent = dataFormatada;

  const form = document.getElementById("form-adicionar");
  const input = document.getElementById("texto-bilhete");
  const painel = document.querySelector(".painel-itens");

  function criarBilhete(texto) {
  const novoBilhete = document.createElement("div");
  novoBilhete.className = "bilhete";

  const paragrafo = document.createElement("p");
  paragrafo.textContent = texto;

  const pin = document.createElement('div');
  pin.classList.add('pin');

  const botaoExcluir = document.createElement("button");
  botaoExcluir.className = "excluir";
  botaoExcluir.textContent = "×";
  botaoExcluir.title = "Excluir bilhete";

  botaoExcluir.addEventListener("click", function() {
    novoBilhete.remove();
  });

  novoBilhete.appendChild(pin);
  novoBilhete.appendChild(paragrafo);
  novoBilhete.appendChild(botaoExcluir);
  painel.appendChild(novoBilhete);
}

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const texto = input.value.trim();
    if (texto === "") return;

    criarBilhete(texto);
    input.value = "";
  }
});
  });
});
