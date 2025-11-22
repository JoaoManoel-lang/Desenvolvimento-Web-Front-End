let carrinho = [];

document.getElementById("form-ingresso").addEventListener("submit", function(e) {
  e.preventDefault();

  const banda = document.getElementById("banda").value;
  const dia = document.getElementById("dia").value;
  const horario = document.getElementById("horario").value;
  const valor = document.getElementById("valor").value;

  const ingresso = `${banda} - ${dia} às ${horario} (R$${valor})`;
  carrinho.push(ingresso);
  atualizarCarrinho();

  // Mostra o carrinho automaticamente
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
  if (carrinhoDiv.style.display === "none" || carrinhoDiv.style.display === "") {
    carrinhoDiv.style.display = "block";
  } else {
    carrinhoDiv.style.display = "none";
  }
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
  } else {
    alert("Compra finalizada! Você escolheu:\n" + carrinho.join("\n"));
    carrinho = [];
    atualizarCarrinho();
    document.getElementById("carrinho").style.display = "none";
  }
}

function irParaFinalizar() {
  window.location.href = "finalizar.html";
}

