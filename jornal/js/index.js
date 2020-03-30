config.noticiasConhecidas.forEach(noticia => {
  create("div", {className:"news-container", appendChild:[
    create("a", {className:"title", innerHTML:noticias[noticia].titulo, href:`/jornal/noticia.html?id=${noticia}`}),
    create("div", {className:"content", appendChild:[
      create("span", {className:"content-img", innerHTML:`<img src='${noticias[noticia].imagem}'>Imagem ilustrativa.`}),
      create("p", {innerHTML:noticias[noticia].conteudo})
    ]}),
    create("a", {className:"read-more", innerHTML:"Leia mais", href:`/jornal/noticia.html?id=${noticia}`})
  ]}, document.getElementById("container"));
});
