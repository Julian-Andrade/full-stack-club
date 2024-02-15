const { createProduct, Product } = require("./product");

require("./hello");

const product = createProduct(1, "Macbook", 1200);

const product2 = new Product(2, "Iphone", 1500);

console.log(product.getInfo());
console.log(product2.getInfo());
