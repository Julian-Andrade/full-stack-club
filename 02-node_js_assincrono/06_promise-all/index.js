const loadProducts = () => {
  return new Promise((resolve, reject) => {
    const error = false;

    if (error) {
      return reject("Erro ao verificar a lista de produtos.");
    }

    setTimeout(() => {
      resolve([{ id: 1, name: "Macbook", price: 900 }]);
    }, 3000);
  });
};

const loadCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, name: "Notebooks" }]);
    }, 3000);
  });
};

const loadUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, name: "Julian Andrade", age: 33 }]);
    }, 3000);
  });
};

const init = async () => {
  // const products = await loadProducts();
  // const categories = await loadCategories();
  // const users = await loadUsers();

  // console.log({ products, categories, users });

  // Promise.all para executar todas as Promises
  // Ao executar uma Promise.all, se alguma falhar, todas irão falhar
  // Para executar promises mesmo que possua algum erro, pode-se utilizar o Promise.allsettled

  try {
    const [products, categories, users] = await Promise.all([
      loadProducts(),
      loadCategories(),
      loadUsers(),
    ]);

    console.log({ products, categories, users });
  } catch (error) {
    console.log(error);
  }
};

init();
