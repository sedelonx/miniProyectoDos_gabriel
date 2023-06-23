//Importando librerías básicas para manejarme dentro del proyecto

const express = require("express");
const path = require("path");

//Iniciamos express para poder utilizar sus funciones/métodos
const app = express();

//Le decimos a express que puede mostrar los conetenidos de la carpeta "public"
app.use(express.static(__dirname + "/public"));

//Creo que al final nunca usé esto porque pleaba hacer un chat, pero básicamente permite leer datos que envíes
//a través del link, como una cuenta o mensajes en "tiempo real", osea, en vez de recibir información como usuario
//la envías al servidor
app.use(express.urlencoded({extended : true}));

//Le decimos a la página que esté atenta a las siguientes extensiones/peticiones del link, por ahora ambas
//te envían al index.html (la que está en la carpeta public).
//Prestar atención que, aunque no le diga al programa que busca a index.html en la carpeta public, por defecto
//express va a buscar por defecto a los archivos html, imágenes, css, etc; en la carpeta public (Solo si la
//definimos con express.static, pues sino express creerá que debe mantener los archivos de esta carpeta privados)
//Por lo tanto no hace falta escritor "/public/index.html", sino "/index.html"
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname + "/index.html"))
});
app.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"))
    });


   
//CAMBIAR IP POR SU IP ESTÁTICA DE COMPUTADORA, SINO 127.0.0.1 (osea el localhost)
//PARA SABER DEFINIR UNA IP ESTÁTICA SI SU COMPAÑÍA DE INTERNET LES PERMITE (en windows 10 al menos),
//CITAR ESTE LINK https://www.youtube.com/watch?v=5iRp1Nug0PU
app.listen(3000, "192.168.0.69", () => {
    //un mensajito para que sepan que el server está vivo
    console.log("Server is up");
})




