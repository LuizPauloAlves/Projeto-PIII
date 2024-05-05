async function verDados() {
  const conexao = await fetch("https://dengue-em-foco-api-889c311e3d33.herokuapp.com/v1/locations/");
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function enviarFormulario(nome, email, celular, endereco, numero, cidade, cep) {
  const conexao = await fetch("https://dengue-em-foco-api-889c311e3d33.herokuapp.com/v1/locations/", {
    method: "POST",
    headers: {
      "Content-type" : "application/json"
    },
    body: JSON.stringify({
      name: nome,
      description: email,
      address: `${endereco}, ${numero}, ${cidade}`,
      phone: celular,
      postal_code: cep
    })
  });
  console.log(conexao);
  const conexaoConvertida = await conexao.json();
  console.log(conexaoConvertida);
  return conexaoConvertida;
}

async function enviarAtualizacao(id, endereco, cep) {
  const conexao = await fetch(`https://dengue-em-foco-api-889c311e3d33.herokuapp.com/v1/locations/${id}`, {
    method: "PUT",
    headers: {
      "Content-type" : "application/json"
    },
    body: JSON.stringify({
      address: endereco,
      postal_code: cep
    })
  });
  console.log(conexao);
  const conexaoConvertida = await conexao.json();
  console.log(conexaoConvertida);
  return conexaoConvertida;
}
// ERRO na visita
async function enviarVisita(id,visita){
  const conexao = await fetch(`https://dengue-em-foco-api-889c311e3d33.herokuapp.com/v1/locations/${id}`, {
    method: "PUT",
    headers: {
      "Content-type" : "application/json"
    },
    body: JSON.stringify({
      visited: visita
    })
  });
  console.log(conexao);
  const conexaoConvertida = await conexao.json();
  console.log(conexaoConvertida);
  return conexaoConvertida;
}

async function enviarExclusao(id){
  const conexao = await fetch(`https://dengue-em-foco-api-889c311e3d33.herokuapp.com/v1/locations/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type" : "application/json"
    },
    body: JSON.stringify({
    })
  });
  console.log(conexao);
  const conexaoConvertida = await conexao.json();
  console.log(conexaoConvertida);
  return conexaoConvertida;
}

export const conectaAPI = {
  verDados,
  enviarFormulario,
  enviarAtualizacao,
  enviarVisita,
  enviarExclusao
}