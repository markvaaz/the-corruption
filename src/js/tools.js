let config;
let personagem;
function create(el, atributos){
  let elemento = document.createElement(el)
  
  for(let i in atributos){
    if(elemento[i] !== null && elemento[i] !== undefined){
      elemento[i] = atributos[i]
    }
  }
  return elemento
}
Element.prototype.remove = function() {
  this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
  for(var i = this.length - 1; i >= 0; i--) {
    if(this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
}
let url = new URL(window.location);
if(url.searchParams.get("personagemId")){
  var personagemId = url.searchParams.get("personagemId");
}

function loadPersonagens(){
  var ajax = new XMLHttpRequest();
  ajax.open("GET", "/src/data/personagens.json", false);
  ajax.send();
  personagem = JSON.parse(ajax.responseText);
  localStorage.setItem("personagens", this.personagem);
}
loadPersonagens();

function loadConfig(){
  var ajax = new XMLHttpRequest();
  ajax.open("GET", "/src/data/config.json", false);
  ajax.send();
  config = JSON.parse(ajax.responseText);
  localStorage.setItem("config", this.config);
}
loadConfig();
