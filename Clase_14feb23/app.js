// importamos express
const express = require('express');
// heredamos las funcionalidades de express
const app = express();
// indicamos que vamos a usar json
app.use(express.json());

// configuramos el endpoint
app.get('/', (req, res,next) => {
    res.status(200).send('<h1 style="color:red">Sitio Alejandro Lara</h1>');
    next();
});

// el guion bajo es para indicar que no se va a usar
app.get('/info', (_, res) => {
    res.status(200).send('Hola Alejandro Lara, esta es la info!');
    
    //res.send('Hola Alejandro Lara, esta es la info!');
});

app.post('/enviar', (req, res,next) => {
    console.log(req.body);
    //res.send('he recibido la petición correcta');
    res.status(201).send('he recibido la petición correcta');
    next();
});

// le indicamos el puerto en el que va a escuchar
app.listen(3000, () => {
    console.log('si se escucha en el 3000');
});