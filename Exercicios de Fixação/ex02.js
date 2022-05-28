//Há algum problema ou falha no seguinte trecho de código?



class Funcionario { 
    salario = 0.0 
   }
   class Supervisor extends Funcionario { }
   class Diretor extends Supervisor { }
   class CalculadoraComissaoFuncionario {
    static calcularComissao(funcionario) {
    if (funcionario === Funcionario) {
    return funcionario.salario * 0.1
    }
    if (funcionario === Supervisor) {
    return funcionario.salario * 0.2
    } 
    return funcionario.salario * 0.4
    }
   }
   const f = new Funcionario()
   f.salario = 100
   console.log(
    CalculadoraComissaoFuncionario.calcularComissao(f)
   )