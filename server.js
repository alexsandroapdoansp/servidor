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