const http = require('http');

const servidor = http.createServer((req, res) => {

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
                        font-family: Arial;
                        background: #0f172a;
                        color: white;
                        margin: 0;
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

                    .container {
                        padding: 30px;
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

                    <p>Servidor funcionando!</p>

                    <p>Bem-vindo ao exercício de rotas básicas.</p>

                    <p>Horário atual: ${new Date().toLocaleString('pt-BR')}</p>
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
                        font-family: Arial;
                        background: #0f172a;
                        color: white;
                        margin: 0;
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

                    .container {
                        padding: 30px;
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
                    <h1>Sobre o aluno</h1>

                    <p>Nome: Arthur da Silva Veeck</p>

                    <p>Curso: TI</p>

                    <p>Horário atual: ${new Date().toLocaleString('pt-BR')}</p>
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
                        font-family: Arial;
                        background: #0f172a;
                        color: white;
                        margin: 0;
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

                    .container {
                        padding: 30px;
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

                    <p>Cidade: Sapucaia do Sul</p>

                    <p>Horário atual: ${new Date().toLocaleString('pt-BR')}</p>
                </div>

            </body>
            </html>
        `;

    } else {

        pagina = `
            <h1>404</h1>
            <p>Página não encontrada.</p>
        `;

    }

    res.end(pagina);

});

servidor.listen(3000, () => {

    console.log('Servidor rodando em http://localhost:3000');

});