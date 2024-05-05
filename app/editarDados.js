import { conectaAPI } from "./conectaAPI.js";


function modificarDados(){
  const alterar = document.querySelectorAll(".btn__icons__alterar");
  const check = document.querySelectorAll(".btn__icons__check");
  const deletar = document.querySelectorAll(".btn__icons__deletar");

  alterar.forEach(button => {
    button.addEventListener("click", () => {
      const linha = button.closest(".tabela__conteudo");
      const idLinha = linha.id;
      const conteudoIdLinha = linha.children[0].textContent;
      const endereco = prompt (`Quer alterar ${conteudoIdLinha} para o qual endereco \n (Rua exemplo, 123, Piquete-Sp):`);
      const cep = prompt (`Qual vai ser o CEP (Ex: 12620-000):`);
      atualizarDados(idLinha, endereco, cep);
    });
  });

  check.forEach(button => {
    button.addEventListener("click", async () => {
      const linha = button.closest(".tabela__conteudo");
      const idLinha = linha.id;
      const conteudoIdLinha = linha.children[0].textContent;
      let visitaConfirmada = await alertaMensagem(`Deseja o local ${conteudoIdLinha} foi visitado?`);
      if (visitaConfirmada) {
        visitado(idLinha,visitaConfirmada);
      } else {
        console.log(`Cancelada a operacao da linha ${idLinha}`);
      }
    });
  });

  deletar.forEach(button => {
    button.addEventListener("click", async () => {
      const linha = button.closest(".tabela__conteudo");
      const idLinha = linha.id;
      const conteudoIdLinha = linha.children[0].textContent;
      let confirmacao = await alertaMensagem(`Deseja excluir a linha ${idLinha} com as informaçoes ${conteudoIdLinha}?`);
      if (confirmacao) {
        exclusaoDeDados(idLinha);
      } else {
        console.log(`Cancelada a exclusão da linha ${idLinha}`);
      }
    });
  });



}



function alertaMensagem(mensagem) {
  return new Promise((resolve) => {
    const alert = document.createElement("div");
    const alertYES = document.createElement("button");
    const alertNO = document.createElement("button");
    alertYES.innerText = "YES";
    alertNO.innerText = "NO";
    alert.appendChild(alertYES);
    alert.appendChild(alertNO);
    alert.classList.add("alert");
    alert.setAttribute("style",
    `position: fixed;
    width: 37.5%;
    background-color: #ddd;
    font-size: 1rem;
    font-weight: 700;
    top: 25%;
    left: 30%;
    padding: 1.5rem;
    border: none;
    border-radius: 0.25rem;
    box-shadow: 0 0.5rem 0.25rem 0 #888;
    display: block;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    margin-right: 2rem;
    `);
  alertYES.setAttribute("style", `
    font-size: 1rem;
    height: 2rem;
    width: 3rem;
    border: none;
    background-color: orange;
    border-radius: 0.25rem;
    padding: 0.25rem;
    margin: 1rem auto;
    display:block;
  `);
  alertNO.setAttribute("style", `
    font-size: 1rem;
    height: 2rem;
    width: 3rem;
    border: none;
    display: block;
    margin: 1rem auto;
    background-color: orange;
    border-radius: 0.25rem;
    padding: 0.25rem;
  `);
    alert.innerHTML = `<span>${mensagem}</span>`;
    alert.appendChild(alertYES);
    alert.appendChild(alertNO);
    alertYES.addEventListener("click", () => {
      alert.remove();
      resolve(true);
    });
    alertNO.addEventListener("click", () => {
      alert.remove();
      resolve(false);
    });
    document.body.appendChild(alert);
  });
}

async function atualizarDados(id, endereco, cep) {
  await conectaAPI.enviarAtualizacao(id, endereco, cep);
  location.reload();
}

async function visitado(id,visita){
  await conectaAPI.enviarVisita(id,visita);
  location.reload();
}

async function exclusaoDeDados(id){
  await conectaAPI.enviarExclusao(id);
  location.reload();
}



export const editarDados = {
  modificarDados
}