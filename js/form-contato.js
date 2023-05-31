const isUserAuth = localStorage.getItem("userToken")

if(!isUserAuth) window.location = "index.html" 

const form = document.querySelector('form');
const emailUser = document.querySelector('#email-user');
const assunto = document.querySelector('#assunto');
const mensagem = document.querySelector('#mensagem');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    const emailUserValue = emailUser.value.trim();
    const assuntoValue = assunto.value.trim();
    const mensagemValue = mensagem.value.trim();
    
    if(emailUserValue === ''){
        setErrorFor(emailUser, 'Email inválido!');

    }else{
        setSuccessFor(emailUser);
    }

    if(assuntoValue === ''){
        setErrorFor(assunto, 'O assunto não pode ficar vazio!');
    }else{
        setSuccessFor(assunto);
    }

    if(mensagemValue === ''){
      setErrorFor(mensagem, 'A mensagem não pode ficar em branco!');
    }else{
      setSuccessFor(mensagem);
    }

    const isValid =
    emailUserValue !== "" &&
    assuntoValue !== "" &&
    mensagemValue !== "";

    if (isValid) {
      window.location = "jornadas.html";
    } else {
        console.log("ainda não")
    }
}

function setErrorFor(input, msg){
    const formControl = input.parentElement.parentElement;
    if(formControl.querySelector('small')){
        const small = formControl.querySelector('small');
        formControl.removeChild(small);
    }
    const small = document.createElement('small');
    small.style.color = "#e82c2c"
    small.style.textAlign = "left"
    small.style.marginBlock = "6px"
    small.innerText = msg;
    formControl.appendChild(small);
    formControl.className = 'form-control error';
}   

function setSuccessFor(input){
    const formControl = input.parentElement.parentElement;
    if(formControl.querySelector('small')){
      const small = formControl.querySelector('small');
      formControl.removeChild(small);
  }
    formControl.className = 'form-control success';
}