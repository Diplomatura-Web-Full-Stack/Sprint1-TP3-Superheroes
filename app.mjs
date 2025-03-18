import express from "express"; //Express.js , que nos permite crear y manejar un servidor web de manera sencilla.

//creamos una instancia de express:una instancia de Router es un sistema de direccionamiento y middleware que se usa para crear manejadores de rutas. También se le conoce como una "miniaplicación".. nos permite definir rutas y manejar solicitudes HTTP. 
const app = express();

// configurar el puerto en el que el servidor escuchará
const puerto = 3000;

/*app.get('/user/:id', (req, res)=>{
    const userId=req.params.id; 
    console.log(`ID del susuario recibido: ${userId}`)
    res.send(`Perfil de usuario con id: ${userId}`)
}) */


//RUTEO BASICO

//ruta GET para el home
//solicitud: http://localhost:3000/
app.get("/", (req, res) => {
  res.send("Pagina de inicio");
});
  //req (soicitud): contiene la información de la solicitud - res(respuesta): se usa para enviar la rta - res.send("..."): envía el texto al cliente,



//ruta GET para recibir datos simples
//solicitud: http://localhost:3000/data
app.get("/data", (req, res) => {
  res.send("Datos recibidos");
});


//RUTEO CON PARÁMETROS DE RUTA

//solicitud: http://localhost:3000/user/123
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Perfil de usuario con ID: ${userId}`);
});
  // "/user/:id" -> parametro DINAMICO que cambia en la URL 
  // req.params.id -> Captura el valor del parámetro.


//ruta GET con multiples parámetros
//solicitud: http://localhost:3000/product/electronics/456
app.get("/product/:category/:id", (req, res) => {
  const { category, id } = req.params;
  res.send(`Categoria: ${category}, Id del producto: ${id}`);
});
  // "/product/:category/:id" -> Tiene dos parámetros dinámicos.
  // req.params -> permite capturarlos en un objeto { category, id }


//RUTEO CON CONSULTAS(Query Params):
//ruta GET con parámetros de consulta
//solicitud: http://localhost:3000/search?q=javascript
app.get("/search", (req, res) => {
  const query = req.query.q;
  res.send(`Resultados de busqueda para: ${query}`);
});
  // req.query.q -> Captura el valor del parámetro de consulta q en la URL.
  // La diferencia con los parámetros de ruta (:id) es que los Query Params van después de ?


//Iniciar el servidor
app.listen(puerto, () => {
    console.log(`Servidor corriendo en http:/localhost: ${puerto}`);
  });
  //app.listen(puerto, callback): Inicia el servidor en el puerto 3000.
  //Cuando el servidor está corriendo, se muestra el mensaje en la terminal.
  


/* RESUMEN: 


Rutas básicas:
Las rutas en Express se definen con "app.METHOD()", donde:

  -app es la instancia de Express.
  -METHOD es el tipo de solicitud (GET, POST, PUT, DELETE, etc.).
  -path es la URL a la que responde el servidor.
  -callback(req, res) maneja la solicitud y la respuesta.

Rutas con parámetros de ruta:
  Un parámetro de ruta es un valor dinámico que forma parte de la URL.

Rutas con múltiples parámetros:
  Si necesita más de un parámetro en la URL

Rutas con Parámetros de consulta:
  Los parámetros de consulta se envían en la URL después de ? como clave=valor


Tipos de solicitudes HTTP y Express:
  En una API, no solo usamos GET, también tenemos:

    GET→ Para obtener datos.
    POST→ Para enviar datos.
    PUT→ Para actualizar datos completos.
    PATCH→ Para actualizar datos parciales.
    DELETE→ Para eliminar datos.
    
    
*/