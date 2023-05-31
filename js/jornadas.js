const isUserAuth = localStorage.getItem("userToken")

if(!isUserAuth) window.location = "index.html" 

const listaGraduacoes = [
  {
    img: "../imgs/argentina.webp",
    title: "GRADUAÇÃO ARGENTINA",
  },
  {
    img: "../imgs/canada.webp",
    title: "GRADUAÇÃO CANADÁ",
  },
  {
    img: "../imgs/eua.webp",
    title: "GRADUAÇÃO EUA",
  },
  {
    img: "../imgs/india.webp",
    title: "GRADUAÇÃO INDIA",
  },
  {
    img: "../imgs/mexico.webp",
    title: "GRADUAÇÃO MÉXICO",
  },
  {
    img: "../imgs/uruguai.webp",
    title: "GRADUAÇÃO URUGUAI",
  },
];


addEventListener("load", () => {
    const graduacoes = document.getElementById("graduacoes");
    
    listaGraduacoes.forEach((item, index) => {
        const li = document.createElement("li");
        const p = document.createElement("p");
        graduacoes.appendChild(li)
        li.appendChild(p)
        li.classList.add('graduacao')

        li.style.backgroundImage = `url(${item.img})`
        li.style.backgroundRepeat = 'no-repeat'
        li.style.backgroundSize = 'cover'
        li.style.backgroundPosition = "center center"

        p.innerText = item.title
        p.style.fontSize = '30px'
        p.style.paddingInline = '5px'

    });
});
