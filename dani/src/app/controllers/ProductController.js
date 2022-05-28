import Product from "../models/Product";

//Create Product

class ProductController {
  async store(req, res) {

    const {id, author, title, price} = await Product.create(req.body)

    return res.json({
      id,
      author,
      title,
      price
    });   
}
}
 


export default new ProductController();