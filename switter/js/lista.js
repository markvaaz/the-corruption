config.personagensConhecidos.forEach(id => {
  create("a", { href:`/switter/perfil.html?personagemId=${id}`, appendChild:[
    create("div", {className:"profile", onclick:`window.location.href = "./perfil.html?personagemId=${id}"`, appendChild:[
      create("div", {className:"profile-picture", style:`background-image:url("${personagem[id].foto}")`}),
      create("div", {className:"profile-name", innerHTML:personagem[id].nome})
    ]})
  ]}, document.getElementsByClassName("profile-list")[0]);
});