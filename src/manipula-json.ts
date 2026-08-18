// importar apenas as funções que precisamos utilizar do "fs"
import { existsSync, readFileSync, mkdirSync, writeFileSync } from "fs";

// 1. Definição do Tipo do Dado (Model)
type Livro = {
    título: string;
    autor: string;
    ano: number;
    lido: boolean;
};

// 2. Lista Inicial de Dados (Mock Data)
const livros: Livro [] = [
    { título: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, lido: true},
    { título: "A Revolução dos Bichos", autor: "George Orwell", ano: 1945, lido: false}
// Adicione mais livros aqui
];

// 3. Verificação e Criação do Diretório "dados"
const pasta = "./dados";
if (!existsSync(pasta)) { // Verifica a existência do caminho
    mkdirSync(pasta); // Caso não exista, ele cria uma pasta com nome "data"
}

// 4. Salvando os dados convertidos na pasta em JSON
const caminho = `${pasta}/livros.json`;
writeFileSync(caminho, JSON.stringify(livros, null, 2));
console.log("Dados salvos com sucesso! ✅");

// 5. Lendo os dados de volta e convertendo em Objetos
const textoLido = readFileSync(caminho, "utf-8");
const livrosRecuperados: Livro [] = JSON.parse(textoLido);

// 6. Exibição Formatada do Conteúdo Recuperado
console.log("\n ==== 📚 LIVROS RECUPERADOS 📚 ====")
livrosRecuperados.forEach((livros, index) => {
    const status = livros.lido ? "✅Lido" : "❌Não lido";
    console.log(`${index + 1}. ${livros.título} - ${livros.autor} (${livros.ano}) - ${status}`);
});