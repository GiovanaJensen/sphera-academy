const form = document.querySelector('form');
const emailUser = document.querySelector('#email-user');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function criarConta(){
    window.location = "cadastro.html";
}

function checkInputs(){
    const emailUserValue = emailUser.value.trim();
    const passwordValue = password.value.trim();
    
    if(emailUserValue === ''){
        setErrorFor(emailUser, 'Email inválido!');

    }else{
        setSuccessFor(emailUser);
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Senha não pode estar vazio!');
    }else{
        setSuccessFor(password);
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
    small.style.marginBlock = "6px"
    small.innerText = msg;
    formControl.appendChild(small);
    formControl.className = 'form-control error';
}   

function setSuccessFor(input){
    const formControl = input.parentElement.parentElement;
    const small = formControl.querySelector('small');
    formControl.removeChild(small);
    formControl.className = 'form-control success';
    window.location = 'minha-conta.html';
}