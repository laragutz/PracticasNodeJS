import express from 'express'
import { engine } from 'express-handlebars'
import users from './data/users.json'

const app = express()
app.use(express.json());

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/', (req, res) => {
  // res.status(200).send('<h1 style="color:red">Hola Koders!!!</h1>')
  res.render('home')
})

app.get('/hola', (_, res) => {
  res.status(200).send('Hola Raf4')
})

app.get('/users', (_, res) => {
  res.render('users')
})

app.get('/users/:id', (req, res) => {
  const userId = req.params.id

  console.log(typeof userId)

  const usuarioEncontrado = users.find(user => user.id == userId)

  console.log(usuarioEncontrado)
  res.status(200).send({ ...usuarioEncontrado })
})

app.put('/users/:id', (req, res) => {
  console.log(req.params.id)
  console.log(req.body)
  res.status(200).send(`Usuario con id: ${req.params.id} modifique su Nombre a: ${req.body.nombre}`)
})

app.post('/enviar', (req, res, next) => {
  console.log(req.body)
  res.status(201).send('recibi la peticion correctamente y guarde los datos')
  next()
})

app.post('/not-found', (_, res) => {
  res.status(404).send('<h1 style="color:pink">Me falta el email</h1>')
})

app.listen(3000, () => {
  console.log('Aplicación corriendo en el puerto 3000')
})