const fs = require('fs');

const mensagem = `
Meu primeiro arquivo criado com Node.js.
Data: ${new Date().toLocaleString('pt-BR')}
`;

const mensagem2 = `
Nome: Arthur da Silva Veeck
Curso: TI
Cidade: Sapucaia do Sul
Data: ${new Date().toLocaleString('pt-BR')}
`;

fs.writeFileSync('meuArquivo.txt', mensagem);
fs.writeFileSync('aluno.txt', mensagem2);

console.log('Arquivo criado com sucesso!');


const conteudo = fs.readFileSync('meuArquivo.txt', 'utf8');
const conteudo2 = fs.readFileSync('aluno.txt', 'utf8');

console.log('\n=== CONTEÚDO DO ARQUIVO ===');
console.log(conteudo);
console.log(conteudo2);