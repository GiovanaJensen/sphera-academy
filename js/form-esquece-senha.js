const form = document.querySelector('form');
const email = document.querySelector('#email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    const emailValue = email.value.trim();
    if(emailValue === ''){
        setErrorFor(email, "Email não pode estar em branco!");
    }else if (!isEmail(emailValue)){
        setErrorFor(email, "Email inválido!");
    }else{
        setSuccessFor(email);
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