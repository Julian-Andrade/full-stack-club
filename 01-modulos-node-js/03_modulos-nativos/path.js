const path = require("path");
const fs = require("fs");

// Caminho do arquivo com nome do arquivo
// console.log(__filename);
// Caminho do arquivo sem o nome do arquivo
// console.log(__dirname);

// Pegar o nome do arquivo
console.log(`Caminho do arquivo - ${path.basename(__filename)}`);

// Pegar a extensão do arquivo
console.log(`Extensão do arquivo - ${path.extname(__filename)}`);

// Criar um arquivo no diretório atual
fs.writeFile(
  path.join(__dirname, "message.txt"),
  "Welcome to Full Stack Club",
  () => {}
);
