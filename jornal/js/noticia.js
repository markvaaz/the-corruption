create("div", {className:"news-container full", appendChild:[
  create("div", {className:"title", innerHTML:noticias[noticiaId].titulo}),
  create("div", {className:"content", appendChild:[
    create("span", {className:"content-img", innerHTML:`<img src='${noticias[noticiaId].imagem}'>Imagem ilustrativa.`}),
    create("p", {innerHTML:noticias[noticiaId].conteudo})
  ]})
]}, document.getElementById("container"));
