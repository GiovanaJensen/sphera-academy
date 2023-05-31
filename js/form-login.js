const isUserAuth = localStorage.getItem("userToken")

if(isUserAuth) window.location = "minha-conta.html" 

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
    }}

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

function setSuccessFor(input){
    const formControl = input.parentElement.parentElement;

    if(formControl.querySelector('small')){
        const small = formControl.querySelector('small');
        formControl.removeChild(small);
    }
    
    formControl.className = 'form-control success';

    const getUserData = fakeAuthData.find((data) => data.email === emailUser.value && data.senha === password.value)

    if(getUserData && getUserData.token){
        localStorage.setItem("userToken", getUserData.token)
        window.location = "minha-conta.html"
    } else {
        showToast("Dados inválidos.", "#d42828")
    }


}