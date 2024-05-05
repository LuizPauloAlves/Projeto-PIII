import { conectaAPI } from "./conectaAPI.js";
import { solicitacaoEnviada } from "./solicitacaoEnviada.js";
const formulario = document.querySelector("[data-formulario]");


async function criarSolicitacao(evento){
  evento.preventDefault();
  const nome = document.querySelector("[data-nome]").value;
  const email = document.querySelector("[data-email]").value;
  const celular = document.querySelector("[data-cel]").value;
  const endereco = document.querySelector("[data-endereco]").value;
  const numero = document.querySelector("[data-numero]").value;
  const cidade = document.querySelector("[data-cidade]").value;
  const cep = document.querySelector("[data-cep]").value;

  await conectaAPI.enviarFormulario(nome, email, celular, endereco, numero, cidade, cep);

  solicitacaoEnviada.enviadoComSucesso("O envio foi feito com sucesso!");

}

formulario.addEventListener("submit", evento => criarSolicitacao(evento));

