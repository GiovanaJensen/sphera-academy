const isUserAuth = localStorage.getItem("userToken")

if(!isUserAuth) window.location = "index.html" 


const fakeAuthData = [
  {
      nome: "Barbara Hellen", 
      email: "barbarapereira123@hotmail.com", 
      senha: "@Barbara1505",
      dtnascimento: "15/05/2001", 
      token: "qH2P4nV5sO8eL1k"
  }, 
  {
      nome: "Sphera Admin", 
      email: "admin@sphera.com",
      senha: "@Admin22",
      dtnascimento: '12/12/2000' ,
      token: "dG5a9rT3cY7jX1w"
  }, 
  {
      nome: "Felipe Cannarozzo", 
      email: "cannarozzo@felipe.com", 
      senha: "@voudar10pravcs",
      dtnascimento: "12/6/1998", 
      token: "mJ6iN2bF8vK3xR4"
  }
]

document.addEventListener("DOMContentLoaded", () => {
  const userToken = localStorage.getItem('userToken')
  const userLoggedData = fakeAuthData.find(user => user.token === userToken)

  const nome = document.querySelector("#nome").value = userLoggedData.nome;
  const email = document.querySelector("#email").value = userLoggedData.email;
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
    const cidadeValue = cidade.value.trim();
    const estadoValue = estado.value.trim();
    const objetivoValue = objetivo.value.trim();
    const inglesValue = ingles.value.trim();
    const ondeValue = ondeGostaria.value.trim();

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
      cidadeValue !== "" &&
      estadoValue !== "" &&
      objetivoValue !== "" &&
      inglesValue !== "" &&
      ondeValue !== "";

    if (isValid) {
      window.location = "jornadas.html";

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
    let cepValue = cep.value.trim();
    if (cepValue.length === 8) {
      buscarCidadeEstadosByCep(cepValue);
    }else if (cepValue === ""){
      setErrorFor(cep, "É necessário informar o seu CEP!")
    }else if (cepValue != 8){
      setErrorFor(cep, "O CEP precisa ter 8 caracteres!")
    }
  });


});
