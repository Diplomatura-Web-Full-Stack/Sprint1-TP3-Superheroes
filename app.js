import express from 'express'; 

//crear una instancia de express
const app=express(); 

// configurar el puerto en el que el servidor escuchará
const puerto=3000; 

// ruta basica
app.get('/', (req, res)=>{
    res.send('Hola mundo');
}); 

/*app.get('/user/:id', (req, res)=>{
    const userId=req.params.id; 
    console.log(`ID del susuario recibido: ${userId}`)
    res.send(`Perfil de usuario con id: ${userId}`)
}) */


//Iniciar el servidor 
app.listen(puerto, ()=>{console.log (`Servidor corriendo en http:/localhost: ${puerto}`)});

//RUTEO BASICO
    //ruta GET para el home 

        //solicitud: http://localhost:3000/
       app.get('/',(req, res)=>{res.send('Pagina de inicio')});


    //ruta GET para recibir datos simples 
        //solicitud: http://localhost:3000/data
        app.get('/', (req, res)=>{res.send('Datos recibidos')});

//RUTEO CON PARÁMETROS DE RUTA
    //solicitud: http://localhost:3000/user/123
    app.get('/user/:id', (req, res)=>{
        const userId=req.params.id; 
        res.send(`Perfil de usuario con ID: ${userId}`)
    });

    //ruta GET con multiples parámetros 
    //solicitud: http://localhost:3000/product/electronics/456
    app.get ('/product/:category/:id', (req, res)=>{
        const {category, id}=req.params; 
        res.send(`Categoria: ${category}, Id del producto: ${id}`)
    });


//RUTEO CON CONSULTAS:
    //ruta GET con parámetros de consulta
    //solicitud: http://localhost:3000/search?q=javascript
    app.get ('/search', (req, res)=>{
        const query=req.query.q; 
        res.send (`Resultados de busqueda para: ${query}`)
    })
