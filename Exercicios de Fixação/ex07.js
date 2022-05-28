// Explique o comportamento deste script testando a entrada de valores válidos. Considere que temos instalado o módulo express.

const app = require('express')()
app.get('/exercicio07/:x', (rq,rs, n) => {
 const x = rq.params['x'] 
 if (x == 1) {
 return rs.json({x: 1})
 } else if (x == 2) {
 n(x)
 } else {
 rs.send('' + x)
 }
})
app.listen(3000)
