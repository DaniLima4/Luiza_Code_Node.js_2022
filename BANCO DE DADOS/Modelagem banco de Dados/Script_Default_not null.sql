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


create table Itens (
	id int8,
	quantidade decimal not null,
	primary KEY(id)
);

create table Lista_desejo (
	id int8,
	nome varchar(255) default ' ' not null,
	primary KEY(id)
);
