const http = require('http');

const fs = require('fs');

const servidor = http.createServer((req, res) => {

    const dataHora = new Date().toLocaleString('pt-BR');

    const log = `[${dataHora}] Acesso em ${req.url}\n`;

    fs.appendFile('log.txt', log, (erro) => {

        if (erro) {
            console.log('Erro ao salvar log');
        }

    });

    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    let pagina = '';

    if (req.url === '/') {

        pagina = `
            <html>
            <head>

                <title>Início</title>

                <style>

                    body {
                        margin: 0;
                        font-family: Arial;
                        background: #0f172a;
                        color: white;
                    }

                    nav {
                        background: #1e293b;
                        padding: 15px;
                    }

                    nav a {
                        color: #38bdf8;
                        text-decoration: none;
                        margin-right: 20px;
                        font-weight: bold;
                    }

                    nav a:hover {
                        color: white;
                    }

                    .container {
                        padding: 40px;
                    }

                    h1 {
                        color: #38bdf8;
                    }

                </style>

            </head>

            <body>

                <nav>
                    <a href="/">Início</a>
                    <a href="/sobre">Sobre</a>
                    <a href="/contato">Contato</a>
                </nav>

                <div class="container">

                    <h1>Página Inicial</h1>

                    <p>Bem-vindo ao mini site em Node.js.</p>

                    <p>Data e hora: ${dataHora}</p>

                </div>

            </body>

            </html>
        `;

    } else if (req.url === '/sobre') {

        pagina = `
            <html>
            <head>

                <title>Sobre</title>

                <style>

                    body {
                        margin: 0;
                        font-family: Arial;
                        background: #0f172a;
                        color: white;
                    }

                    nav {
                        background: #1e293b;
                        padding: 15px;
                    }

                    nav a {
                        color: #38bdf8;
                        text-decoration: none;
                        margin-right: 20px;
                        font-weight: bold;
                    }

                    nav a:hover {
                        color: white;
                    }

                    .container {
                        padding: 40px;
                    }

                    h1 {
                        color: #38bdf8;
                    }

                </style>

            </head>

            <body>

                <nav>
                    <a href="/">Início</a>
                    <a href="/sobre">Sobre</a>
                    <a href="/contato">Contato</a>
                </nav>

                <div class="container">

                    <h1>Sobre</h1>

                    <p>Nome: Arthur da Silva Veeck</p>

                    <p>Curso: TI</p>

                    <p>Cidade: Sapucaia do Sul</p>

                    <p>Data e hora: ${dataHora}</p>

                </div>

            </body>

            </html>
        `;

    } else if (req.url === '/contato') {

        pagina = `
            <html>
            <head>

                <title>Contato</title>

                <style>

                    body {
                        margin: 0;
                        font-family: Arial;
                        background: #0f172a;
                        color: white;
                    }

                    nav {
                        background: #1e293b;
                        padding: 15px;
                    }

                    nav a {
                        color: #38bdf8;
                        text-decoration: none;
                        margin-right: 20px;
                        font-weight: bold;
                    }

                    nav a:hover {
                        color: white;
                    }

                    .container {
                        padding: 40px;
                    }

                    h1 {
                        color: #38bdf8;
                    }

                </style>

            </head>

            <body>

                <nav>
                    <a href="/">Início</a>
                    <a href="/sobre">Sobre</a>
                    <a href="/contato">Contato</a>
                </nav>

                <div class="container">

                    <h1>Contato</h1>

                    <p>Email: arthur.silva.veeck@gmail.com</p>

                    <p>Telefone: (51) 98964-8044</p>

                    <p>Instagram: @arthurveeck</p>

                    <p>Data e hora: ${dataHora}</p>

                </div>

            </body>

            </html>
        `;

    } else {

        pagina = `
            <html>

            <body style="background:#0f172a; color:white; font-family:Arial;">

                <h1>404</h1>

                <p>Página não encontrada.</p>

            </body>

            </html>
        `;

    }

    res.end(pagina);

});

servidor.listen(3000, () => {

    console.log('Servidor rodando em http://localhost:3000');

});