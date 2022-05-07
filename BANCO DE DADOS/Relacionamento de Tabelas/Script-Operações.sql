/*  */

/* Retornar todas as colunas da tabela lista de desejos */

select * from lista_desejo ld 


/* Relacionar duas tabelas */

join categoria c on ld.categoria_id = c.id 

/* Ordenar os dados - desc = decrescente*/
order by c.id desc

/* Filtro  */
where ld.nome = 'Lista 1'

/* Número de linhas de um critério especificado - count(*)*/
select i.id,  count(*)

from itens i join produto p on i.produto_id = p.id 
group by i.id

/*  avg = valor média de uma colna especificada */

select 
	ld.id,
	avg(p.valor)

from 
	itens i 

join 
	produto p on 
	i.produto_id = p.id 
	
join lista_desejo ld on 
	i.lista_desejo_id = ld.id 
	
group by ld.id

/*  soma = valor total */

select 
	ld.id,
	sum(p.valor)

from 
	itens i 

join 
	produto p on 
	i.produto_id = p.id 
	
join lista_desejo ld on 
	i.lista_desejo_id = ld.id 
	
group by ld.id

/*  min = menor valor */

select min(valor)
from produto p 

/*  max = menor valor */
select max(valor)
from produto p 


/*  procurar uma padrão especificado em uma coluna - junto com where */

select *
from produto p 
where nome like 'N%' /*Produto com letra N */

select *
from produto p 
where nome like 'J%' 