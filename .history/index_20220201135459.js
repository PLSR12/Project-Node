const express = require("express")

const port = 3001

const server = express()

/*
    - Query Params => meusite.com/users?nome=pedro&age=18  // Funciona como um filtro

    - Route Params => /users/2   // Busca, deleta ou atualiza algo mais específico
*/

server.get("/users", (request ,response) => {

    return response.send("Hello Doidao")
})

server.listen(port, () => {
    console.log("Server started 🚀"  )
} )