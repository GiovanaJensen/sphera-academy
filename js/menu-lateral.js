const rotas = 
[
    {
        "nome": "Minha conta",
        "url": "/minha-conta.html",
        "icon": "fa-regular fa-circle-user"  
    },
    {
        "nome": "Universidades",
        "url": "/universidades.html",
        "icon": "fa-solid fa-graduation-cap"
    },
    {
        "nome": "Bolsas",
        "url": "/bolsas.html",
        "icon": "fa-solid fa-bitcoin-sign"   
    },
    {  
        "nome": "Jornadas",
        "url": "/jornadas.html",
        "icon": "fa-solid fa-tv"   
    },
    {  
        "nome": "Contato",
        "url": "/contato.html",
        "icon": "fa-regular fa-comments"   
    }
]

const rotasMenu = document.querySelector(".rotas")


rotas.forEach(item => {
    const li = document.createElement('li')
    const ancora = document.createElement('a')
    const icon = document.createElement('i')
    const span = document.createElement('span')

    rotasMenu.appendChild(li)
    li.appendChild(ancora)
    ancora.appendChild(icon)
    ancora.appendChild(span)

    li.classList.add("li-rotas")
    ancora.classList.add("links-rotas")    


    span.textContent = item.nome
    icon.className = item.icon
    ancora.href = item.url

    const caminhoAtual = window.location.href

    var parsedUrl = new URL(caminhoAtual);
    var rota = parsedUrl.pathname;

    if(rota === item.url) {
        li.classList.add("route-active")
    }
})