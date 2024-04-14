const prompt = require("prompt-sync")();
const { table } = require("console");
const { parse } = require("csv-parse");
const fs = require("fs");
const readline = require("readline");

// caminho do csv
const path = "TesteNodeJs 1.csv";

// criando a stream de leitura
const readStream = fs.createReadStream(path);

// criando a incerface readline
const readInterface = readline.createInterface({
  input: readStream
});

// inicializando o array
const vendas = [];

//lendo as linhas
readInterface.on("line", (line) => {
    if (line.contains("APROVADO")) {
        const row = line.split(",");
        vendas.push(row);
 }
});

// fechando a leitura do cvs
readInterface.on("close", () => {
  console.log(vendas);
});

// lidando com erros
readInterface.on("error", (err) => {
  console.error("Error reading the CSV file:", err);
});

