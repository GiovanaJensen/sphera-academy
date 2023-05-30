const formPerfil = document.querySelector('.form-perfil')
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const cidade = document.querySelector('#cidade')
const estado = document.querySelector('#estado')
const cep = document.querySelector('#cep')
const escola = document.querySelector('#escola')
const objetivo = document.querySelector('#objetivo')
const ingles = document.querySelector('#ingles')
const ondeGostaria = document.querySelector('#onde-gostaria')

formPerfil.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    const nomeValue = nome.value.trim();
    const emailValue = email.value.trim();
    const cidadeValue = cidade.value.trim();
    const estadoValue = estado.value.trim();
    const cepValue = cep.value.trim();
    const objetivoValue = objetivo.value;
    const inglesValue = ingles.value;
    const ondeValue = ondeGostaria.value;

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

    if(cidadeValue === ''){
        setErrorFor(cidade, 'É necessário informar o nome de sua cidade!');
    }else{
        setSuccessFor(cidade);
    }

    if(estadoValue === ''){
        setErrorFor(estado, 'É necessário informar o seu estado!');
    }else{
        setSuccessFor(estado);
    }

    if(cepValue === ''){
        setErrorFor(cep, 'É necessário informar o seu CEP!');
    }else if(cepValue.length != 8){
        setErrorFor(cep, 'CEP deve ter 8 digitos (não é necessário colocar traço), ex.: XXXXXXXX');
    }else{
        setSuccessFor(cep);
    }

    if(objetivoValue === 'null'){
        setErrorForOption(objetivo, 'Selecione uma opção!');
    }else{
        setSuccessForOption(objetivo);
    }

    if(inglesValue === 'null'){
        setErrorForOption(ingles, 'Selecione uma opção!');
    }else{
        setSuccessForOption(ingles);
    }

    if(ondeValue === 'null'){
        setErrorForOption(ondeGostaria, 'Selecione uma opção!');
    }else{
        setSuccessForOption(ondeGostaria);
    }
}

function setErrorForOption(input, msg) {
    const formControl = input.parentElement;
    if(formControl.querySelector('small')){
        const small = formControl.querySelector('small');
        formControl.removeChild(small);
    }

    const small = document.createElement('small');
    small.style.color = "#e82c2c"
    small.style.marginBlock = "6px"
    small.innerText = msg;
    formControl.appendChild(small);
    console.log(small)
}

function setSuccessForOption(input){
    const formControl = input.parentElement;

    if(formControl.querySelector('small')){
        const small = formControl.querySelector('small');
        formControl.removeChild(small);
    }

    window.location = 'jornadas.html';
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
    window.location = 'jornadas.html';
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}