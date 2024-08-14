const Product = require("../models/product.model");

module.exports.createProduct = (request, response) => {
  const { title, price, description } = request.body;
  Product.create({ title, price, description })
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};

module.exports.findAllProducts = (req, res) => {
  Product.find({})
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
};

module.exports.getProductById = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((oneSingleProduct) => {
      res.json(oneSingleProduct);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.updateProduct = (request, response) => {
  Product.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
  })
    .then((updatedProduct) => response.json(updatedProduct))
    .catch((err) => response.json(err));
};

// module.exports.deleteProduct = (request, response) => {
//   Product.deleteOne({ _id: request.params.id })
//       .then(deleteConfirmation => response.json(deleteConfirmation))
//       .catch(err => response.json(err))
// };

module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
       .then(result => {
            res.json({ result: result })
       })
       .catch((err) => {
            res.json(err)
       });
}
