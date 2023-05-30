const form = document.querySelector('.form');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const senha1 = document.querySelector('#senha1');
const senha2 = document.querySelector('#senha2');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    const nomeValue = nome.value.trim();
    const emailValue = email.value.trim();
    const senha1Value = senha1.value.trim();
    const senha2Value = senha2.value.trim();

    if(nomeValue === ''){
        setErrorFor(nome, 'Nome não pode ser nulo!');
    }else{
        setSuccessFor(nome);
    }

    if(emailValue === ''){
        setErrorFor(email, "Email não pode ser nulo!");
    }else{
        setSuccessFor(email);
    }

    if(senha1Value === ''){
        setErrorFor(senha1, 'Senha não pode ser nulo!');
    }else if(senha1Value.length < 8){
        setErrorFor(senha1, 'Senha tem que ter no mínimo 8 caracteres!');
    }else{
        setSuccessFor(senha1);
    }

    if(senha2Value === ''){
        setErrorFor(senha2, 'Senha não pode ser nulo!');
    }else if(senha2Value.length < 8){
        setErrorFor(senha2, 'Senha tem que ter no mínimo 8 caracteres!');
    }else{
        setSuccessFor(senha2);
    }
}

function setErrorFor(input, msg) {
    const formControl = input.parentElement.parentElement;
    if(formControl.querySelector('small')){
        const small = formControl.querySelector('small');
        formControl.removeChild(small);
    }

    const small = document.createElement('small');
    small.style.color = "#e82c2c"
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
    window.location = 'index.html';
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}