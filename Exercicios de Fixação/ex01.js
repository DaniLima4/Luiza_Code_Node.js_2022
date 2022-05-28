//Com base no script abaixo, defina a superclasse Mamifero

//DEFININDO SUPERCLASSE MAMIFERO 

class Mamifero {
    constructor(idadeMaxima, selvagem) {
    this.idadeMaxima = idadeMaxima,
    this.selvagem = selvagem   
    }
}
  
//CÓDIGO DO EXERCICIO
class Felino extends Mamifero {
    constructor(idadeMaxima, selvagem) {
    super(idadeMaxima)
    this.selvagem = selvagem
    }
   }

   const gatos = new Felino (18, false)
   console.log('É selvagem?', gatos.selvagem)
   console.log('Quanto?', gatos.informarAnosFaltamIdadeMaxima(12))
   