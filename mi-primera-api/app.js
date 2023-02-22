// esto es viejo
//const express = require('express')

//esto es sintaxis excma script 6
import express, { request } from 'express'

const app = express()

// esto es para que el servidor pueda entender los datos
// de la ruta que se envia desde el cliente
// es un middleware para formato json
app.use(express.json())

const users = [
    {
      id: 1,
      name: "Alison",
      email: "alison@mail.com",
      createdAt: "2023-01-01"
    },
    {
      id: 2,
      name: "Paola",
      email: "paola@mail.com",
      createdAt: "2023-01-01"
    },
    {
      id: 3,
      name: "Rafa",
      email: "rafa@mail.com",
      createdAt: "2023-01-01"
    }
  ]

const posts = [
  {
    id: 1,
    title: "Post 1",
    content: "Contenido del post 1",
    userId: 2,
    createdAt: "2023-02-22",
    likes: 0
  },
  {
    id: 2,
    title: "Post 2",
    content: "Contenido del post 2",
    userId: 1,
    createdAt: "2023-02-22",
    likes: 45
  },
  {
    id: 3,
    title: "Post 1",
    content: "Contenido del post 1",
    userId: 2,
    createdAt: "2023-02-20",
    likes:150
  }
]

// sección de posts
// index de los posts
app.get('/posts', (request,response) => {
  response.status(200).send(posts)
})


// sección de usuarios
// obtener los posts de un usuario especifico que superen cierta cantidad de likes
app.get('/users/:id/:numlikes', (request, response) => {
  console.log(request.params.id)
  console.log(request.params.numlikes)
  console.log('usando solo params')

})

app.get('/users/posts', (request, response) => {
  console.log(request.query.id)
  console.log(request.query.numlikes)
  console.log('usando query params')
})


// obtener un posts de un usuario especifico
app.get('/users/', (request, response) => {
  const { id } = request.params

  const user = users.find(user => user.id === parseInt(id))
  if(!user) {
    response.status(404).send({error: 'Usuario no encontrado'})
  }
  
  const userPostFind = posts.find((post) => post.userId === parseInt(id))
  if(!userPostFind){
    response.status(404).send({error: 'Este usuario no tiene posts'})
  }
  else{
    response.status(200).send(userPostFind)
  }
})


app.get('/', (request_, response) => {
    response
        .status(200)
        .send({
            message: 'Bienvenidos a la API RESTful de la Generacion 23a'
        })
})

// index
app.get('/users', (request_, response) => {
    response
        .status(200)
        .send({
            users
        })
})

app.post('/users', (request, response) => {
    // console.log(request.body)
    if (Object.entries(request.body).length === 0) {
      response.status(400).send({ error: 'Solicitud invalida' })
    }
    /*
    // este código no usa la sintaxis de ES6
    const { name, email } = request.body
  
    const newUser = {
      id: users.length + 1,
      name,
      email,
      createdAt: "2023-02-17"
    }*/
    const newUser = {
      id: users.length + 1,
      ...request.body,
      createdAt: "2023-02-17"
    }
    users.push(newUser)
    response.status(201).send(newUser)
  })

  // consulta de un usuario
  app.get('/users/:id', (request, response) => {
    const { id } = request.params
    const user = users.find(user => user.id === parseInt(id))
    if (!user) {
      response.status(404).send({ error: 'Usuario no encontrado' })
    }
    response.status(200).send(user)
  })

  // actualizar un usuario
  app.put('/users/:id', (request, response) => {
    if (Object.entries(request.body).length === 0) {
      response.status(400).send({ error: 'Solicitud invalida' })
    }

    const { id } = request.params
    const user = users.find(user => user.id === parseInt(id))
    if (!user) {
      response.status(404).send({ error: 'Usuario no encontrado' })
    }
    const { name, email,createdAt } = request.body
    if (name) {
      user.name = name
    }
    if (email) {
      user.email = email
    }
    if (createdAt) {
      user.createdAt = createdAt
    }
    response.status(200).send({ message: 'Usuario actualizado'})
  })

  // eleiminar un usuario
  app.delete('/users/:id', (request, response) => {
    const { id } = request.params
    const user = users.find(user => user.id === parseInt(id))
    if (!user) {
      response.status(404).send({ error: 'Usuario no encontrado' })
    }
    const index = users.indexOf(user)
    users.splice(index, 1)
    response.status(200).send({ message: 'Usuario eliminado' })
  })

app.listen(3000, () => {
  console.log("servidor ejecutando en el puerto 3000")
})