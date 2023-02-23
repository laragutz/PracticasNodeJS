import { Router } from "express"
import { indexUsers } from "../controllers/userController.js"

// instanciamos el router
const router = Router()

router.route('/users')
    .get(indexUsers)
    .post()

router.route('/users/:id')
    .get()
    .put()
    .delete()

/*

// Soporte ruta index
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
    
    // este código no usa la sintaxis de ES6
    //const { name, email } = request.body
  
    //const newUser = {
    //  id: users.length + 1,
    //  name,
    //  email,
    //  createdAt: "2023-02-17"
    const newUser = {
      id: users.length + 1,
      ...request.body,
      createdAt: "2023-02-17"
    }
    users.push(newUser)
    response.status(201).send(newUser)
  })


  */

  export default router