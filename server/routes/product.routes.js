const ProductController = require("../controllers/product.controller");
module.exports = function (app) {
  app.get("/api/products", ProductController.findAllProducts);
  app.post("/api/product", ProductController.createProduct);
  app.get('/api/product/:id', ProductController.getProductById);
  app.patch('/api/product/:id/edit', ProductController.updateProduct);
  app.delete('/api/product/:id/delete', ProductController.deleteProduct);


};
