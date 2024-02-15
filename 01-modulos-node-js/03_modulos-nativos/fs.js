const fs = require("fs");
const path = require("path");

// Criar uma pasta no diretório atual
// Utilizar o path.join para não correr o risco de criar arquivo/pasta em outro local
fs.mkdir(path.join(__dirname, "new-folder"), (error) => {
  // console.log(error);
});

// Criar um arquivo dentro da nova pasta
fs.writeFile(
  path.join(__dirname, "new-folder", "new-file.txt"),
  "Olá Full Stack Club",
  (error) => {
    // console.log(error);
  }
);

// Adicionar um conteúdo ao arquivo criado
fs.appendFile(
  path.join(__dirname, "new-folder", "new-file.txt"),
  "\nHello World Full Stack Club",
  (error) => {
    // console.log(error);
  }
);

let fileContent = "";

// Ler o conteúdo de um arquivo
fs.readFile(
  path.join(__dirname, "new-folder", "new-file.txt"),
  "utf-8",
  (error, data) => {
    fileContent = data;

    console.log(`conteúdo do arquivo lido: \n${fileContent}`);
  }
);
