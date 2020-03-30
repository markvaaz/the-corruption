let config;
let personagem;
let noticias;
let switter;

function create(el, atributos, appendTo){
  let elemento = document.createElement(el);
  
  for(let atributo in atributos){
    if(atributo == "appendChild"){
      atributos[atributo].forEach(child => {
        elemento.appendChild(child);
      });
    }else if(atributo == "addEventListener"){
      elemento.addEventListener(atributos[atributo].event, atributos[atributo].function);
    }else if(atributo == "style"){
      elemento.setAttribute("style", atributos[atributo]);
    }else{
      if(elemento[atributo] !== null && elemento[atributo] !== undefined){
        elemento[atributo] = atributos[atributo];
      }
    }
  }
  if(appendTo){
    appendTo.appendChild(elemento)
  }
  return elemento;
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
}else if(url.searchParams.get("id")){
  var noticiaId = url.searchParams.get("id");
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

function loadNoticias(){
  var ajax = new XMLHttpRequest();
  ajax.open("GET", "/src/data/noticias.json", false);
  ajax.send();
  noticias = JSON.parse(ajax.responseText);
  localStorage.setItem("noticias", this.noticias);
}
loadNoticias();

function loadSwitter(){
  var ajax = new XMLHttpRequest();
  ajax.open("GET", "/src/data/switter.json", false);
  ajax.send();
  switter = JSON.parse(ajax.responseText);
  localStorage.setItem("config", this.switter);
}
loadSwitter();