const express = require("express")
const app = express()


const fs = require("fs")


const path = require("path")


app.get("/frutas/all", (req, res) => {
    const frutas = fs.readFileSync(path.join(__dirname, "frutas.json"), "utf-8");
  
    res.send(frutas);
  });


  app.use((req, res, next) => {
    res.status(404).send("no existe esa ruta");
  });//rutas inexistentes /verduras


  app.listen(3000,() => console.log(`http://localhost:3000`))



