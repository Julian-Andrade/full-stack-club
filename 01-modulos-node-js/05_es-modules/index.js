// const { createProduct, Product } = require("./product");

import { createProduct, Product } from "./product.js";

const product = createProduct(1, "Macbook", 1200);

const product2 = new Product(2, "Iphone", 1500);

console.log(product.getInfo());
console.log(product2.getInfo());
