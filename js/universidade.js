// Exemplo de JSON com objetos de universidades
var universidades = [
  {
    nome: "Universidade 1",
    localizacao: "Local 1",
    tuition: "R$ 10.000,00",
    taxaAceitacao: "80% de taxa",
  },
  {
    nome: "Universidade 2",
    localizacao: "Local 2",
    tuition: "R$ 15.000,00",
    taxaAceitacao: "70% de taxa",
  },
  {
    nome: "Universidade 3",
    localizacao: "Local 3",
    tuition: "R$ 20.000,00",
    taxaAceitacao: "90% de taxa",
  },
  {
    nome: "Universidade 3",
    localizacao: "Local 3",
    tuition: "R$ 20.000,00",
    taxaAceitacao: "90% de taxa",
  },
  {
    nome: "Universidade 3",
    localizacao: "Local 3",
    tuition: "R$ 20.000,00",
    taxaAceitacao: "90% de taxa",
  },
  {
    nome: "Universidade 3",
    localizacao: "Local 3",
    tuition: "R$ 20.000,00",
    taxaAceitacao: "90% de taxa",
  },
];

// Função para criar a div universidade com base nos dados do objeto
function criarDivUniversidade(universidade) {
  var divUniversidade = document.createElement("div");
  divUniversidade.className = "universidade";

  var divImg = document.createElement("div");
  divImg.className = "img";
  var img = document.createElement("img");
  img.src = "/imgs/universidade.webp";
  img.alt = "";
  divImg.appendChild(img);

  var divDetalhes = document.createElement("div");
  divDetalhes.className = "detalhes";

  var h1 = document.createElement("h1");
  h1.textContent = universidade.nome;

  var hr = document.createElement("hr");

  var h2Localizacao = document.createElement("h2");
  h2Localizacao.textContent = "Localização";

  var divLocalizacao = document.createElement("div");
  var iLocalizacao = document.createElement("i");
  iLocalizacao.className = "fa-solid fa-location-dot";
  var spanLocalizacao = document.createElement("span");
  spanLocalizacao.textContent = universidade.localizacao;
  divLocalizacao.appendChild(iLocalizacao);
  divLocalizacao.appendChild(spanLocalizacao);

  var h2Tuition = document.createElement("h2");
  h2Tuition.textContent = "Tuition para internacionais por ano";

  var divTuition = document.createElement("div");
  var iTuition = document.createElement("i");
  iTuition.className = "fa-solid fa-dollar-sign";
  var spanTuition = document.createElement("span");
  spanTuition.textContent = universidade.tuition;
  divTuition.appendChild(iTuition);
  divTuition.appendChild(spanTuition);

  var h2TaxaAceitacao = document.createElement("h2");
  h2TaxaAceitacao.textContent = "Taxa de aceitação";

  var divTaxaAceitacao = document.createElement("div");
  var iTaxaAceitacao = document.createElement("i");
  iTaxaAceitacao.className = "fa-solid fa-user-check";
  var spanTaxaAceitacao = document.createElement("span");
  spanTaxaAceitacao.textContent = universidade.taxaAceitacao;
  divTaxaAceitacao.appendChild(iTaxaAceitacao);
  divTaxaAceitacao.appendChild(spanTaxaAceitacao);

  divDetalhes.appendChild(h1);
  divDetalhes.appendChild(hr);
  divDetalhes.appendChild(h2Localizacao);
  divDetalhes.appendChild(divLocalizacao);
  divDetalhes.appendChild(h2Tuition);
  divDetalhes.appendChild(divTuition);
  divDetalhes.appendChild(h2TaxaAceitacao);
  divDetalhes.appendChild(divTaxaAceitacao);

  divUniversidade.appendChild(divImg);
  divUniversidade.appendChild(divDetalhes);

  return divUniversidade;
}

// Função para criar as divs universidade para cada objeto do JSON
function criarDivsUniversidades() {
  var container = document.querySelector(".universidades");
  console.log("container", container);

  for (var i = 0; i < universidades.length; i++) {
    var universidade = universidades[i];
    var divUniversidade = criarDivUniversidade(universidade);
    container.appendChild(divUniversidade);
  }
}

// Chamada da função para criar as divs universidade
criarDivsUniversidades();
