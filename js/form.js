const form = document.querySelector('form');
const emailUser = document.querySelector('#email-user');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    const emailUserValue = emailUser.value.trim();
    const passwordValue = password.value.trim();

    if(emailUserValue === ''){
        setErrorFor(emailUser, 'Email ou usuário não pode estar vazia!');
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
    const small = document.createElement('small');
    small.innerText = msg;
    formControl.appendChild(small);
    formControl.className = 'form-control error';

}   

function setSuccessFor(input){
    const formControl = input.parentElement.parentElement;
    formControl.className = 'form-control success';
}