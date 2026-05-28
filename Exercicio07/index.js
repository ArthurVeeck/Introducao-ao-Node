const http = require('http');

const servidor = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
        <h1>Servidor funcionando!</h1>
        <p>Meu primeiro servidor Node.js.</p>
        <p>Nome: Arthur da Silva Veeck</p>
        <p>Curso: TI</p>
        <p>Data e hora: ${new Date().toLocaleString('pt-BR')}</p>
        <p>Cidade: Sapucaia do Sul</p>
    `);

});

servidor.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});