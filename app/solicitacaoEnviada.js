function enviadoComSucesso(mensagem){
  window.alert = function(mensagem,timeout=null){
    const alert = document.createElement("div");
    const alertOk = document.createElement("button");
    alertOk.innerText = "OK";
    alert.appendChild(alertOk);
    alert.classList.add("alert");
    alert.setAttribute("style",
      `position: fixed;
      background-color: #ccc;
      font-size: 1rem;
      font-weight: 700;
      font-family: "Poppins", sans-serif;
      top: 25%;
      left: 50%;
      padding: 1.5rem;
      border: none;
      border-radius: 0.25rem;
      box-shadow: 0 0.5rem 0.25rem 0 #888;
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem; 
      `);
    alertOk.setAttribute("style", `
      font-size: 1rem;
      height: 2rem;
      width: 3rem;
      border: none;
      font-family: "Poppins", sans-serif;
      background-color: orange;
      border-radius: 0.25rem;
      padding:0.25 rem;
      margin: 0 auto;
      margin-top: 2rem;
    `);
    alert.innerHTML = `<span>${mensagem}</span>`;
    alert.appendChild(alertOk);
    alertOk.addEventListener("click", (e) => {
      alert.remove();
      location.reload();
    });
    if(timeout!=null){
      setTimeout(() => {
        alert.remove;
      }, Number(timerout))
    }
    document.body.appendChild(alert);
  }
  alert(mensagem);
}

export const solicitacaoEnviada = {
  enviadoComSucesso
}