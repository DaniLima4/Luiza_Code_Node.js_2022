create table Categoria (
	id int8,
	nome varchar(225),
	primary KEY(id)
);


create table produto (
	id int8,
	nome varchar(225),
	valor decimal not null,
	primary KEY(id)
);


create table itens (
	id int8,
	quantidade decimal not null,
	produto_id int8,
	lista_desejo_id int8,
	constraint itens_fk_produto_id foreign key (produto_id) references produto (id),
	constraint itens_fk_lista_desejo_id foreign key (lista_desejo_id) references lista_desejo(id),
	primary KEY(id)
);


create table lista_desejo (
	id int8,
	nome varchar(255) default ' ' not null,
	categoria_id int8, 
	constraint lista_desejo_fk_categoria_id foreign key (categoria_id) references categoria (id),
	primary KEY(id)
);


