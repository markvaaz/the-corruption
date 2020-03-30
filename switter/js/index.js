function loadPosts(){
  let postagens = [];
  
  //Seleciona as postagens dos postagens conhecidas
  config.postagensConhecidas.forEach(conhecido => {
    if(switter[conhecido]){
      postagens.push(switter[conhecido]);
    }
  });

  //Ordena os posts por mais recente.
  let posts = postagens.sort((a, b) => b.data - a.data);

  posts.forEach(post => {
    //Transforma a data do post em dia/mes/ano
    let data = new Date(Number(post.data));
    let dia = data.getDate() < 10 ? "0" + data.getDate() : data.getDate();
    let mes = (data.getMonth() + 1) < 10 ? "0" + (data.getMonth() + 1) : (data.getMonth() + 1);
    let ano = data.getFullYear();

    create("div", {className:"post", appendChild:[
      create("div", {className:"profile-info", appendChild:[
        create("a", {href:`/switter/perfil.html?personagemId=${post.id}`, appendChild:[
          create("div", {className:"profile-picture", style:`background-image:url("${personagem[post.id].foto}");`}),
        ]}),
        create("div", {className:"post-info", appendChild:[
          create("a", {href:`/switter/perfil.html?personagemId=${post.id}`, appendChild:[
            create("div", {className:"profile-name", innerHTML:personagem[post.id].nome})
          ]}),
          create("div", {className:"post-date", innerHTML:`${dia}/${mes}/${ano}`})
        ]})
      ]}),
      create("div", {className:"post-content", innerHTML:post.conteudo})
    ]}, document.getElementsByClassName("feed")[0]);
  });
}

loadPosts();