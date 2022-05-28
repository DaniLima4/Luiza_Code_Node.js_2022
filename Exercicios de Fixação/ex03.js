//Jogo dos 7 erros: Analisando separadamente cada função erroXX(), identifique o possível erro que temos em cada função.

function erro01() {
    class SistemaOperacional() {
    constructor(nome) {
    this.nome
    }
    }
    const so = new SistemaOperacional()
    console.log(so.nome)
   }
   function erro02() {
    class Roupa {
    constructor(tipo) { this.tipo = tipo}}
    const ro = Roupa('blusa')
    console.log(ro.tipo)
   } 
   function erro03() {
    class Ave {
    constructor(nome) { this.nome = nome || null }
    }
    class Codorna extends Ave{ constructor() { super.nome = 'Codorna' }}
    const av = new Codorna()
    console.log(av.nome)
   }
   function erro04() {
    class Pessoa {
    }
    class Funcionario extends Pessoa {
    constructor(nome) {
    super()
    this.pessoa = new Funcionario()
    this.pessoa.nome = nome
    } 
    }
    const f = new Funcionario(nome)
    console.log(f.nome) 
   }
   function erro05() {
    class CalculadoraArray {
    calcular(array) {
    return array.reduce((a,b) => a + b, 0)
    }
    }
    const resultado = CalculadoraArray.calcular([1,2])
    console.log(resultado)
   }
   function erro06() {
    class Figura {
    constructor(base, altura) {
    this.base = base, this.altura = altura
    }
    get area() {
    return this.base * this.altura
    }
    }
    class Triangulo extends Figura {
    constructor(baseTriangulo, alturaTriangulo) {
    super(baseTriangulo, alturaTriangulo)
    }
    get area() {
    return super.area() / 2.0
    }
    }
    t = new Triangulo(4,3)
    console.log('Área do triângulo:', t.area)
   }
   function erro07() {
    class A_B_C_D {
    somar(y=10) {
    return this.x + y
    }
    }
    class ABCDE extends A_B_C_D {
    constructor(x) {
    super()
    this.x = x
    }
    }
    ABCDE = new ABCDE()
    console.log('Soma: ', ABCDE.somar())
   }
   