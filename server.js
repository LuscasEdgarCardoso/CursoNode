const http = require("http")
const host = "127.0.0.1"
const port = 3000

const server = http.createServer((request, response)=>{
    response.statusCode = 200; //Status 200 -> deu tudo certo
    response.setHeader('Content-Type','text/plain'); // 1º tipo do conteudo, 2º tipo texto puro
    response.end('Ola Mundo \n Meu Primeiro Script');
})

server.listen(port, host, ()=>{                      // Vai escutar as informações na porta informada, np servidor host
    console.log(`Server running at http://${host}:${port}`)                                       //
})