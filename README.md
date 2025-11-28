# SERVIDOR

npm init -y

o arquivo de configuração do nosso back-end

```json
{
  "name": "cadastro-usuarios",
  "version": "1.0.0",
  "description": "",
  "main": "index.js", // trocar o nome para server.js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs"
}

```

próximo passo criar o arquivo server.js

e trocar o nome main do package.json para server.js

https://www.npmjs.com/

express ⇒ ferramenta mais utilizada para criar servidor com node

npm install express

Para que o front-end se comunique com back-end eu preciso 

1. Tipo de Rota
2. Endereço

Front End (Cliente)

Cadastro de Usuário

Nome: Alexsandro

Email: alexsandro@mail.com

Telefone: (15) 99682-2022

REQUEST (REQUISIÇÃO) ⇒ 

Back end (Servidor)

GET 

POST

PUT

DELETE

RESPONSE (RESPOSTA) ≤=

1. RESPOSTA
2. STATUS

Não adianta só instalar o express, tenho que avisar que vou usar o express , aí no arquivo server.js colocar

const express = require("express")

Express é uma biblioteca ou framework…

Leia a documentação e faz o que está escrito dentro da documentação…

Não precisa ficar tentando entender o porque… “Nossa mais apareceu do nada uma informação aqui…”

Então o primeiro passo é esse crio uma variável 

const express = require(”express”)

Esse require é o comando do próprio do javascript

Continuando no arquivo server.js digitar 

express().

const app = express()

A gente vamos subir o servidor no meu computador.

app.listen(3333)

```
app.listen(3333, () => {
    console.log("Servidor Rodando")
})
```

como que eu rodo o servidor

node server.js 

let usuarios = []

app.

MÉTODOS HTTP   STATUS HTTP

GET ⇒ LISTAR         2xx ⇒ SUCESSO

POST ⇒ CRIAR        4XX ⇒ ERRO NO CLIENTE

PUT ⇒ ATUALIZAR     5XX ⇒ ERRO NO SERVIDOR

DELETE ⇒ DELETAR

app.post("/usuarios")

app.post("/usuarios", (request, response))

ROTA

https://www.npmjs.com/package/express#Installation

```jsx
//Rota que o FRONT END VAI ACESSAR
app.post("/usuarios", (request, response) => {
    console.log(request)
})
```

isso aqui é um biblioteca

```jsx
//Rota que o FRONT END VAI ACESSAR
app.post("/usuarios", (request, response) => {
    console.log(request)

    response.status(200).send("Tudo ok")
})
```

ctrl +c e node server.js

como não tenho front end vou simular o front-end instalando a extensão chamado thunder client

PESQUISAR NO GOOGLE (HTTP STATUS CODE)

TIPOS DE REQUEST

QUERY PARAMS(GET)

CONSULTAS / FILTROS

servidor.com.br/usuarios?estado=bahia&cidade=salvador

netflix.com.br/series?tipo=comedia&nacionalidade=brasileira

https://www.google.com/search?q=node

ROUTE PARAMS(GET,PUT,DELETE)

Buscar, Deletar ou editar algo Específico

servidor.com.br/usuarios/22

netflix.com.br/series/234

/254889

BODY PARAMS(PUT, POST) ele não aparece na url

Criar ou Editar Informações

{

name: “Alexsandro”,

email: “alexsandro@email.com”

telefone: “15996822022”

}

node —watch server.js

JSON 

```jsx
JSON / JAVASCRIPT OBJECT NOTATION
    JSON é o Padrão de dados da internet
    Front-end => Back-end (JSON)
```

{
"name": "Alexsandro",
"email": "[alexsandro@gmail.com](mailto:alexsandro@gmail.com)",
"telefone": "15996822022"
}

no arquivo server.js avisar que vai usar json

app.use(express.json())

```jsx
// NPM => NODE PACKAGE MANAGER ( GERENCIADOR DE PACOTES DO NODE)

/*  CADASTRO DE USUÁRIOS 
[ ] - Criar um usuário
      - Receber (email, nome e telefone)
[ ] - Deletar um usuário
[ ] - Ver os usuários

    require / requisitando, pegando uma biblioteca
    Endereco: http://localhost:3333/usuarios

    JSON / JAVASCRIPT OBJECT NOTATION
    JSON é o Padrão de dados da internet
    Front-end => Back-end (JSON)
*/

const express = require("express")
const app = express()

app.use(express.json())

let usuarios = []

//Rota que o FRONT END VAI ACESSAR
app.post("/usuarios", (request, response) => {

    console.log(request.body)

    response.status(200).send("Tudo ok")
})

app.listen(3333, () => {
    console.log("Servidor Rodando")
})
```

{
"name": "Alexsandro",
"email": "[alexsandro@gmail.com](mailto:alexsandro@gmail.com)",
"telefone": "15996822022"
}

```jsx
// NPM => NODE PACKAGE MANAGER ( GERENCIADOR DE PACOTES DO NODE)

/*  CADASTRO DE USUÁRIOS 
[ ] - Criar um usuário
      - Receber (email, nome e telefone)
[ ] - Deletar um usuário
[ ] - Ver os usuários

    require / requisitando, pegando uma biblioteca
    Endereco: http://localhost:3333/usuarios

    JSON / JAVASCRIPT OBJECT NOTATION
    JSON é o Padrão de dados da internet
    Front-end => Back-end (JSON)
*/

const express = require("express")
const app = express()

app.use(express.json())

let usuarios = []

//Rota que o FRONT END VAI ACESSAR
app.post("/usuarios", (request, response) => {

    const { name, email, telefone } = request.body

    console.log(name, email, telefone)

    console.log(request.body)

    response.status(200).send("Tudo ok")
})

app.listen(3333, () => {
    console.log("Servidor Rodando")
})
```

```jsx
// NPM => NODE PACKAGE MANAGER ( GERENCIADOR DE PACOTES DO NODE)

/*  CADASTRO DE USUÁRIOS 
[ ] - Criar um usuário
      - Receber (email, nome e telefone)
[ ] - Deletar um usuário
[ ] - Ver os usuários

    require / requisitando, pegando uma biblioteca
    Endereco: http://localhost:3333/usuarios

    JSON / JAVASCRIPT OBJECT NOTATION
    JSON é o Padrão de dados da internet
    Front-end => Back-end (JSON)
*/

const express = require("express")
const app = express()

app.use(express.json())

let usuarios = []

//Rota que o FRONT END VAI ACESSAR
app.post("/usuarios", (request, response) => {

    const { name, email, telefone } = request.body

    console.log(name, email, telefone)

    response.status(200).send("Tudo ok")
})

app.listen(3333, () => {
    console.log("Servidor Rodando")
})
```

atualizando……

Criando usuario

```jsx
// NPM => NODE PACKAGE MANAGER ( GERENCIADOR DE PACOTES DO NODE)

/*  CADASTRO DE USUÁRIOS 
[ ] - Criar um usuário
      - Receber (email, nome e telefone)
[ ] - Deletar um usuário
[ ] - Ver os usuários

    require / requisitando, pegando uma biblioteca
    Endereco: http://localhost:3333/usuarios

    JSON / JAVASCRIPT OBJECT NOTATION
    JSON é o Padrão de dados da internet
    Front-end => Back-end (JSON)
*/

const express = require("express")
const app = express()

app.use(express.json())

let usuarios = []
let id = 1

//Rota que o FRONT END VAI ACESSAR
app.post("/usuarios", (request, response) => {

    const { name, email, telefone } = request.body

    const user = {
        id: id++,
        name: name,
        email: email,
        telefone: telefone,
        criadoEm: new Date(),
    }

    usuarios.push(user)
    // push => colocar algo dentro do array

    response.status(200).send(user)
})

app.listen(3333, () => {
    console.log("Servidor Rodando")
})
```

criando segundo usuario json metodo POST

{
"name": "Maria",
"email": "[Maria@gmail.com](mailto:Maria@gmail.com)",
"telefone": "15996455422"
}

{
"id": 2,
"name": "Maria",
"email": "[Maria@gmail.com](mailto:Maria@gmail.com)",
"telefone": "15996455422",
"criadoEm": "2025-11-28T21:45:35.588Z"
}

Para eu ver ou listar é o GET

```jsx
// NPM => NODE PACKAGE MANAGER ( GERENCIADOR DE PACOTES DO NODE)

/*  CADASTRO DE USUÁRIOS 
[ ] - Criar um usuário
      - Receber (email, nome e telefone)
[ ] - Deletar um usuário
[ ] - Ver os usuários

    require / requisitando, pegando uma biblioteca
    Endereco: http://localhost:3333/usuarios

    JSON / JAVASCRIPT OBJECT NOTATION
    JSON é o Padrão de dados da internet
    Front-end => Back-end (JSON)
*/

const express = require("express")
const app = express()

app.use(express.json())

let usuarios = []
let id = 1

//Rota que o FRONT END VAI ACESSAR
app.post("/usuarios", (request, response) => {

    const { name, email, telefone } = request.body

    const user = {
        id: id++,
        name: name,
        email: email,
        telefone: telefone,
        criadoEm: new Date(),
    }

    usuarios.push(user)
    // push => colocar algo dentro do array

    response.status(200).send(user)
})

app.get("/usuarios", (request, response) => {
    response.status(200).send(usuarios)
})

app.listen(3333, () => {
    console.log("Servidor Rodando")
})
```

E vamos lá no thunder client

fazer nova request

new request

GET

http://localhost:3333/usuarios

Não preciso mandar nada só quero ver os usuarios dai só dou um send.

voltou vazio 

dai adiciona a maria denovo.. no POST.

dai quero ver os usuarios daí

agora vou adicionar o usuario Alexsandro denovo POST

{
"name": "Alexsandro",
"email": "[alexsandro@gmail.com](mailto:alexsandro@gmail.com)",
"telefone": "15996822022"
}

Dai vou no GET PARA VER TODOS THUNDER CLIENT

[
{
"id": 1,
"name": "Maria",
"email": "[Maria@gmail.com](mailto:Maria@gmail.com)",
"telefone": "15996455422",
"criadoEm": "2025-11-28T22:06:09.986Z"
},
{
"id": 2,
"name": "Alexsandro",
"email": "[alexsandro@gmail.com](mailto:alexsandro@gmail.com)",
"telefone": "15996822022",
"criadoEm": "2025-11-28T22:08:03.191Z"
}
]

Além disso estou deixando no meu computador localmente isso não pode temos que enviar para banco de dados real.

A gente simulou o front end, fizemos uma requisição e meu servidor da uma resposta, no nosso caso nós não temos um banco de dados.

CRIAR MAIS UMA REQUISIÇÃO

http://localhost:3333/buscar/usuario

```jsx
app.get("/buscar/usuario/:id", (request, response) => {

    response.status(200).send(usuarios)
})
```

ou abacate http://localhost:3333/usuario/blabla GET new request

```jsx
// NPM => NODE PACKAGE MANAGER ( GERENCIADOR DE PACOTES DO NODE)

/*  CADASTRO DE USUÁRIOS 
[ ] - Criar um usuário
      - Receber (email, nome e telefone)
[ ] - Deletar um usuário
[ ] - Ver os usuários

    require / requisitando, pegando uma biblioteca
    Endereco: http://localhost:3333/usuarios

    JSON / JAVASCRIPT OBJECT NOTATION
    JSON é o Padrão de dados da internet
    Front-end => Back-end (JSON)
*/

const express = require("express")
const app = express()

app.use(express.json())

let usuarios = []
let id = 1

//Rota que o FRONT END VAI ACESSAR
app.post("/usuarios", (request, response) => {

    const { name, email, telefone } = request.body

    const user = {
        id: id++,
        name: name,
        email: email,
        telefone: telefone,
        criadoEm: new Date(),
    }

    usuarios.push(user)
    // push => colocar algo dentro do array

    response.status(200).send(user)
})

app.get("/usuarios", (request, response) => {
    response.status(200).send(usuarios)
})

app.get("/buscar/usuario/:abacate", (request, response) => {

    console.log(request)

    response.status(200).send(usuarios)
})

app.listen(3333, () => {
    console.log("Servidor Rodando")
})
```

Procurar por usuario específico  Query params

```jsx
// NPM => NODE PACKAGE MANAGER ( GERENCIADOR DE PACOTES DO NODE)

/*  CADASTRO DE USUÁRIOS 
[ ] - Criar um usuário
      - Receber (email, nome e telefone)
[ ] - Deletar um usuário
[ ] - Ver os usuários

    require / requisitando, pegando uma biblioteca
    Endereco: http://localhost:3333/usuarios

    JSON / JAVASCRIPT OBJECT NOTATION
    JSON é o Padrão de dados da internet
    Front-end => Back-end (JSON)
*/

const express = require("express")
const app = express()

app.use(express.json())

let usuarios = []
let id = 1

//Rota que o FRONT END VAI ACESSAR
app.post("/usuarios", (request, response) => {

    const { name, email, telefone } = request.body

    const user = {
        id: id++,
        name: name,
        email: email,
        telefone: telefone,
        criadoEm: new Date(),
    }

    usuarios.push(user)
    // push => colocar algo dentro do array

    response.status(200).send(user)
})

app.get("/usuarios", (request, response) => {
    response.status(200).send(usuarios)
})

app.get("/buscar/usuario/:id", (request, response) => {

    const id = request.params.id

    const indexUsuario = usuarios.find(usuario => usuario.id == id)

    response.status(200).send(indexUsuario)
})

app.listen(3333, () => {
    console.log("Servidor Rodando")
})
```

Usuário Não encontrado

```jsx
// NPM => NODE PACKAGE MANAGER ( GERENCIADOR DE PACOTES DO NODE)

/*  CADASTRO DE USUÁRIOS 
[ ] - Criar um usuário
      - Receber (email, nome e telefone)
[ ] - Deletar um usuário
[ ] - Ver os usuários

    require / requisitando, pegando uma biblioteca
    Endereco: http://localhost:3333/usuarios

    JSON / JAVASCRIPT OBJECT NOTATION
    JSON é o Padrão de dados da internet
    Front-end => Back-end (JSON)
*/

const express = require("express")
const app = express()

app.use(express.json())

let usuarios = []
let id = 1

//Rota que o FRONT END VAI ACESSAR
app.post("/usuarios", (request, response) => {

    const { name, email, telefone } = request.body

    const user = {
        id: id++,
        name: name,
        email: email,
        telefone: telefone,
        criadoEm: new Date(),
    }

    usuarios.push(user)
    // push => colocar algo dentro do array

    response.status(200).send(user)
})

app.get("/usuarios", (request, response) => {
    response.status(200).send(usuarios)
})

app.get("/buscar/usuario/:id", (request, response) => {

    const id = request.params.id

    const indexUsuario = usuarios.find(usuario => usuario.id == id)

    if (!indexUsuario) {
        return response.status(404).send({ message: "Usuário não encontrado" })
    }

    response.status(200).send(indexUsuario)
})

app.listen(3333, () => {
    console.log("Servidor Rodando")
})
```

Treinar em casa

```jsx
// NPM => NODE PACKAGE MANAGER ( GERENCIADOR DE PACOTES DO NODE)

/*  CADASTRO DE USUÁRIOS 
[ ] - Criar um usuário
      - Receber (email, nome e telefone)
[ ] - Deletar um usuário
[ ] - Ver os usuários

    require / requisitando, pegando uma biblioteca
    Endereco: http://localhost:3333/usuarios

    JSON / JAVASCRIPT OBJECT NOTATION
    JSON é o Padrão de dados da internet
    Front-end => Back-end (JSON)
*/

const express = require("express")
const app = express()

app.use(express.json())

let usuarios = []
let id = 1

//Rota que o FRONT END VAI ACESSAR
//CRIA UM NOVO USUÁRIO
app.post("/usuarios", (request, response) => {

    const { name, email, telefone } = request.body

    const user = {
        id: id++,
        name: name,
        email: email,
        telefone: telefone,
        criadoEm: new Date(),
    }

    usuarios.push(user)
    // push => colocar algo dentro do array

    response.status(200).send(user)
})

//BUSCA TODOS OS USUÁRIOS 
app.get("/usuarios", (request, response) => {
    response.status(200).send(usuarios)
})

//BUSCA USUÁRIO POR ID
app.get("/buscar/usuario/:id", (request, response) => {

    const id = request.params.id

    const indexUsuario = usuarios.find(usuario => usuario.id == id)

    if (!indexUsuario) {
        return response.status(404).send({ message: "Usuário não encontrado" })
    }

    response.status(200).send(indexUsuario)
})

app.listen(3333, () => {
    console.log("Servidor Rodando")
})
```

Reassistir e dedinho no teclado

```jsx
// NPM => NODE PACKAGE MANAGER ( GERENCIADOR DE PACOTES DO NODE)

/*  CADASTRO DE USUÁRIOS 
[ ] - Criar um usuário
      - Receber (email, nome e telefone)
[ ] - Deletar um usuário
[ ] - Ver os usuários

    require / requisitando, pegando uma biblioteca
    Endereco: http://localhost:3333/usuarios

    JSON / JAVASCRIPT OBJECT NOTATION
    JSON é o Padrão de dados da internet
    Front-end => Back-end (JSON)
*/

const express = require("express")
const app = express()

app.use(express.json())

let usuarios = []
let id = 1

//Rota que o FRONT END VAI ACESSAR
//CRIA UM NOVO USUÁRIO
app.post("/usuarios", (request, response) => {

    const { name, email, telefone } = request.body

    const user = {
        id: id++,
        name: name,
        email: email,
        telefone: telefone,
        criadoEm: new Date(),
    }

    usuarios.push(user)
    // push => colocar algo dentro do array

    return response.status(200).send(user)
})

//BUSCA TODOS OS USUÁRIOS 
app.get("/usuarios", (request, response) => {
    return response.status(200).send(usuarios)
})

//BUSCA USUÁRIO POR ID
app.get("/buscar/usuario/:id", (request, response) => {

    const id = request.params.id

    const indexUsuario = usuarios.find(usuario => usuario.id == id)

    if (!indexUsuario) {
        return response.status(404).send({ message: "Usuário não encontrado" })
    }

    return response.status(200).send(indexUsuario)
})

app.listen(3333, () => {
    console.log("Servidor Rodando")
})
```

Assistir essa aula vai bricando fusa, reassiste, vai brincando e treine muito dedinho no teclado.
