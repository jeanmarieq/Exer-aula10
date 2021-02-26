class Registro {
    constructor(nome, idade, email) {
        this.nome = nome
        this.idade = Number(idade)
        this.email = email

    }

    mostrar() {
        return `${this.nome} tem ${this.idade} anos ${this.email}`
    }
}

class Registros {
    constructor() {
        this.registros = []
    }

     addRegistro(registro) {
        this.registros.push(registro)
    }

}


let nomeEl = document.querySelector("#nome");
let idadeEl = document.querySelector("#idade");
let emailEl = document.querySelector("#email");
let formEl = document.querySelector("form");
let informacionEl = document.querySelector("#informacion");


let registros = new Registros();

formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  let registro = new Registro(nomeEl.value, idadeEl.value, emailEl.value);

  registros.addRegistro(registro);

  nomeEl.value = "";
  idadeEl.value = "";
  emailEl.value = "";

  informacionEl.textContent = registro.mostrar();
});

