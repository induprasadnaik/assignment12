const fs = require('fs');

const loadProducts = () => {
  const data = fs.readFileSync("products.json");
  return JSON.parse(data);
};

const saveProduct = (products) => {
  fs.writeFileSync("products.json", JSON.stringify(products, null, 2));
};
//get all product
exports.getProduct = (req, res) => {
  const products = loadProducts();
  res.status(200).json(products);
};

//add product

exports.addProduct = (req, res) => {
  const products = loadProducts();
  const newProduct = req.body;
  products.push(newProduct);
  saveProduct(products);
  res.status(201).json({ message: "product added", newProduct })

};

//delete product 

exports.deleteProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  let products = loadProducts();
  products = products.filter(p => p.productId !== productId);
  saveProduct(products);
  res.status(200).json({ message: `${productId} deleted successfully` });

}
//update product 

exports.updateProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const products = loadProducts();
  let product = products.find(p => p.productId === productId)
  if (product) {
    product.description = "Preferred by Both Vegetarians and Non Vegetarians";
    saveProduct(products);
    res.status(200).json({ message: `${productId} updated successfully` ,product});
  }
  else {
    res.status(404).json({ message: "Product not found" });
  }
};








