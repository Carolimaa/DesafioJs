
class heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = "";
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
          case "guerreiro":
          ataque = "usou espada";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  let mago = new heroi("Feiticeira Escalarte", 29, "mago");
  let monge = new heroi("Viúva Negra", 37, "monge");
  let guerreiro = new heroi("Fênix Negra", 41, "guerreiro");
  let ninja = new heroi("Mulher Maravilha", 26, "ninja");
  
  mago.atacar()
  monge.atacar()
  guerreiro.atacar()
  ninja.atacar()
  
  