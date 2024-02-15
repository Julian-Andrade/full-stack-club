class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `Dados do Produto - ID: ${this.id}; Nome: ${this.name}; Preço: ${this.price}`;
  }
}

function createProduct(id, name, price) {
  return new Product(id, name, price);
}

module.exports = {
  Product,
  createProduct,
};
