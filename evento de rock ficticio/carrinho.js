let carrinho = [];

document.getElementById("form-ingresso").addEventListener("submit", function(e) {
  e.preventDefault();

  const banda = document.getElementById("banda").value;
  const horario = document.getElementById("horario").value;
  const valor = document.getElementById("valor").value;

  const ingresso = `${banda} - ${horario} (R$${valor})`;
  carrinho.push(ingresso);
  atualizarCarrinho();
  document.getElementById("carrinho").style.display = "block";
});

function atualizarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  lista.innerHTML = "";
  carrinho.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
  });
}

function toggleCarrinho() {
  const carrinhoDiv = document.getElementById("carrinho");
  carrinhoDiv.style.display = carrinhoDiv.style.display === "none" ? "block" : "none";
}

function irParaFinalizar() {
  window.location.href = "finalizar.html";
}