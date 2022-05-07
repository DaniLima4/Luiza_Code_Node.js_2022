insert into categoria (id, nome) values (1, 'Eletronicos');
insert into categoria (id, nome) values (2, 'Decoração');



insert into produto (id, nome, valor) values (1, 'TV', 1000);
insert into produto (id, nome, valor) values (2, 'Notebook', 5000);



insert into lista_desejo (id, nome, categoria_id) values (1, 'Lista 1', 1);
insert into lista_desejo (id, nome, categoria_id) values (2, 'Lista 2', 2);
insert into lista_desejo (id, nome, categoria_id) values (3, 'Lista 3', 2);
insert into lista_desejo (id, nome, categoria_id) values (4, 'Lista 4', 1);

insert into itens (id, quantidade, produto_id, lista_desejo_id) values (1, 1, 2, 1);
insert into itens (id, quantidade, produto_id, lista_desejo_id) values (2 ,2 ,1 ,3);
insert into itens (id, quantidade, produto_id, lista_desejo_id) values (3, 1, 2, 3);


/* Erro de número do item */
insert into itens (id, quantidade, produto_id, lista_desejo_id) values (4, 1, 10, 1);