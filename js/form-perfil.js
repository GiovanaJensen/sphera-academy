const isUserLogado = localStorage.getItem('userToken').trim() !== ""
console.log('isUserLogado', isUserLogado)
      
if(!isUserLogado) window.location = "index.html"

document.addEventListener("DOMContentLoaded", () => {
  const nome = document.querySelector("#nome");
  const email = document.querySelector("#email");
  const cidade = document.querySelector("#cidade");
  const estado = document.querySelector("#estado");
  const cep = document.querySelector("#cep");
  const objetivo = document.querySelector("#objetivo");
  const ingles = document.querySelector("#ingles");
  const ondeGostaria = document.querySelector("#onde-gostaria");
  const formPerfil = document.querySelector("#formPerfil");

  formPerfil.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    const errosFormulario = document.querySelectorAll(".error")
    
    if(errosFormulario.length === 0){
        showToast("Alterações salvas com sucesso", "green")
        formPerfil.reset()
    }
  });

  function checkInputs() {
    const nomeValue = nome.value.trim();
    const emailValue = email.value.trim();
    const cidadeValue = cidade.value.trim();
    const estadoValue = estado.value.trim();
    const cepValue = cep.value.trim();
    const objetivoValue = objetivo.value.trim();
    const inglesValue = ingles.value.trim();
    const ondeValue = ondeGostaria.value.trim();

    if (nomeValue === "") {
      setErrorFor(nome, "Nome não pode ser nulo!");
    } else {
      setSuccessFor(nome);
    }

    if (emailValue === "") {
      setErrorFor(email, "Email não pode ser nulo!");
    } else {
      setSuccessFor(email);
    }

    if (cidadeValue === "") {
      setErrorFor(cidade, "É necessário informar o nome de sua cidade!");
    } else {
      setSuccessFor(cidade);
    }

    if (estadoValue === "") {
      setErrorFor(estado, "É necessário informar o seu estado!");
    } else {
      setSuccessFor(estado);
    }

    if (cepValue === "" || cepValue.length != 8) {
      setErrorFor(cep, "CEP Inválido!");
    } else {
      setSuccessFor(cep);
    }

    if (objetivoValue === "") {
      setErrorFor(objetivo, "É necessário informar o seu objetivo!");
    } else {
      setSuccessFor(objetivo);
    }

    if (inglesValue === "") {
      setErrorFor(ingles, "É necessário informar o seu nível!");
    } else {
      setSuccessFor(ingles);
    }

    if (ondeValue === "") {
      setErrorFor(ondeGostaria, "É necessário informar o país!");
    } else {
      setSuccessFor(ondeGostaria);
    }

    const isValid =
      nomeValue !== "" &&
      emailValue !== "" &&
      cidadeValue !== "" &&
      estadoValue !== "" &&
      !cepValue.length === 8 &&
      objetivoValue !== "" &&
      inglesValue !== "" &&
      ondeValue !== "";

    if (isValid) {
      // Exibe o alerta "Tudo ok"
      alert("Tudo ok");

    } else {
        console.log("ainda não")
    }
  }


  function setErrorFor(input, msg) {
    const formControl = input.parentElement;
    if (formControl.querySelector("small")) {
      const small = formControl.querySelector("small");
      formControl.removeChild(small);
    }

    const small = document.createElement("small");
    small.style.color = "#e82c2c";
    small.style.marginBlock = "6px";
    small.innerText = msg;
    formControl.appendChild(small);
    formControl.className = "form-control error";
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;

    if (formControl.querySelector("small")) {
      const small = formControl.querySelector("small");
      formControl.removeChild(small);
    }
    formControl.className = "form-control success";
  }

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

  function showToast(msg, color) {
    Toastify({
      text: msg,
      duration: 3000, // Tempo de exibição em milissegundos
      gravity: "bottom", // Posição do toast (top, bottom, ou middle)
      position: "right", // Alinhamento horizontal (left, center, ou right)
      backgroundColor: color ? color : "#d42828",
      style: {
        width: "auto",
        height: "60px",
        textAlign: "center",
        alignContent: "center",
        fontSize: "23px",
        paddingInline: "30px",
      },
    }).showToast();
  }

  function buscarCidadeEstadosByCep(cep) {
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    $.ajax({
      url: url,
      type: "GET",
      dataType: "json",
      success: function (data) {
        if (data.hasOwnProperty("erro")) {
          showToast("CEP não encontrado");
        } else {
          cidade.value = data.localidade;
          estado.value = data.uf;
        }
      },
      error: function (xhr, status, error) {
        console.error("Erro na requisição:", error);
      },
    });
  }

  cep.addEventListener("change", () => {
    let cepValue = cep.value;
    if (cepValue.length === 8) {
      buscarCidadeEstadosByCep(cepValue);
    }
  });
});
