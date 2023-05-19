const rotas = 
[
    {
      "nome": "Minha conta",
      "url": "/menu-lateral.html",
      "icon": "fa-regular fa-circle-user"   
    },
    {
      "nome": "Universidades",
      "url": "/universidades.html",
      "icon": "icon"
    },
    {
      "nome": "Bolsas",
      "url": "/bolsas.html",
      "icon": "icon"
    },
    {  
      "nome": "Jornadas",
      "url": "/jornadas.html",
      "icon": "icon"
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
    ancora.href = item.url

    const caminhoAtual = window.location.href

    var parsedUrl = new URL(caminhoAtual);
    var rota = parsedUrl.pathname;
    console.log('item.url', item.url)
    console.log('rota', rota)

    if(rota === item.url) {
        li.classList.add("route-active")
    }
})