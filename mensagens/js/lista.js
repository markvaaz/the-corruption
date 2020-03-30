config.personagensConhecidos.forEach(id => {
  create("a", { href:`/mensagens/perfil.html?personagemId=${id}`, appendChild:[
    create("div", {className:"profile", onclick:`window.location.href = "./perfil.html?personagemId=${id}"`, appendChild:[
      create("div", {className:"profile-picture", style:`background-image:url("${personagem[id].foto}")`}),
      create("div", {className:"profile-info", appendChild:[
        create("div", {className:"profile-name", innerHTML:personagem[id].nome}),
        create("div", {className:"profile-phone", innerHTML:id})
      ]})
    ]})
  ]}, document.getElementsByClassName("profile-list")[0]);
});