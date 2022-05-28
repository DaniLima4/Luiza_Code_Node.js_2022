// eslint-disable-next-line prettier/prettier
import { Router } from "express";
import res from "express/lib/response";

import UserController from "./app/controllers/UserController";

const routes = new Router();

//==============================================

// routes.post("/users", UserController.store);

// routes.put("/users/:req_email", UserController.update);

//==============================================



//Importar controller do Product

import ProductController from "./app/controllers/ProductController";

//Criar novo produto

routes.post("/product", ProductController.store);

export default routes;
